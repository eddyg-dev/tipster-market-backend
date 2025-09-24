import { supabase } from "../config/supabase";
import { OutcomeResult } from "../shared-data/enums/outcome-result.enum";

export class TipOutcomeUpdateService {
  /**
   * Met à jour les outcomes des tips après la mise à jour des scores d'un match
   * Cette méthode est appelée après que le trigger PostgreSQL ait calculé les outcome_results
   */
  static async updateTipsForMatch(matchId: string): Promise<void> {
    try {
      console.log(`🔄 Mise à jour des tips pour le match ${matchId}...`);

      // 1. Récupérer le match avec ses outcome_results
      const { data: match, error: matchError } = await supabase
        .from("matches")
        .select("scores")
        .eq("match_id", matchId)
        .single();

      if (matchError || !match?.scores?.outcome_results) {
        console.log(
          `⚠️  Aucun résultat d'outcome trouvé pour le match ${matchId}`
        );
        return;
      }

      // 2. Récupérer tous les tips et filtrer côté application
      const { data: allTips, error: tipsError } = await supabase
        .from("tips")
        .select("id, selected_outcomes");

      if (tipsError) {
        throw new Error(
          `Erreur lors de la récupération des tips: ${tipsError.message}`
        );
      }

      if (!allTips || allTips.length === 0) {
        console.log(`ℹ️  Aucun tip trouvé`);
        return;
      }

      // Filtrer les tips qui contiennent des outcomes de ce match
      const tips = allTips.filter((tip) => {
        return tip.selected_outcomes?.some(
          (outcome: any) => outcome.match?.match_id === matchId
        );
      });

      if (tips.length === 0) {
        console.log(`ℹ️  Aucun tip trouvé pour le match ${matchId}`);
        return;
      }

      console.log(`📊 ${tips.length} tips trouvés pour le match ${matchId}`);

      // 3. Mettre à jour les outcomes des tips
      const updatedTips = tips.map((tip) => {
        const updatedOutcomes = tip.selected_outcomes.map((outcome: any) => {
          // Vérifier si cet outcome appartient au match en cours
          if (outcome.match?.match_id === matchId) {
            // Trouver le résultat correspondant dans les outcome_results
            const result = match.scores.outcome_results.find(
              (or: any) => or.name === outcome.name && or.type === outcome.type
            );

            if (result) {
              return {
                ...outcome,
                result: result.result as OutcomeResult,
              };
            }
          }
          return outcome;
        });

        return {
          id: tip.id,
          selected_outcomes: updatedOutcomes,
        };
      });

      // 4. Mettre à jour chaque tip individuellement
      for (const updatedTip of updatedTips) {
        const { error: updateError } = await supabase
          .from("tips")
          .update({ selected_outcomes: updatedTip.selected_outcomes })
          .eq("id", updatedTip.id);

        if (updateError) {
          throw new Error(
            `Erreur lors de la mise à jour du tip ${updatedTip.id}: ${updateError.message}`
          );
        }
      }

      console.log(`✅ ${updatedTips.length} tips mis à jour avec succès`);
    } catch (error) {
      console.error(
        `❌ Erreur lors de la mise à jour des tips pour le match ${matchId}:`,
        error
      );
      throw error;
    }
  }

  /**
   * Met à jour les outcomes de tous les tips pour plusieurs matches
   */
  static async updateTipsForMatches(matchIds: string[]): Promise<void> {
    console.log(`🔄 Mise à jour des tips pour ${matchIds.length} matches...`);

    const promises = matchIds.map((matchId) =>
      this.updateTipsForMatch(matchId).catch((error) => {
        console.error(`Erreur pour le match ${matchId}:`, error);
        return null; // Continue avec les autres matches même si un échoue
      })
    );

    await Promise.all(promises);
    console.log(
      `✅ Mise à jour des tips terminée pour ${matchIds.length} matches`
    );
  }

  /**
   * Met à jour tous les tips qui ont des outcomes avec des résultats manquants
   */
  static async updateAllPendingTips(): Promise<void> {
    try {
      console.log("🔄 Recherche des tips avec des outcomes non mis à jour...");

      // Récupérer tous les tips et filtrer côté application
      const { data: allTips, error: tipsError } = await supabase
        .from("tips")
        .select("id, selected_outcomes");

      if (tipsError) {
        throw new Error(
          `Erreur lors de la récupération des tips: ${tipsError.message}`
        );
      }

      if (!allTips || allTips.length === 0) {
        console.log("ℹ️  Aucun tip trouvé");
        return;
      }

      // Filtrer les tips qui ont des outcomes avec result = "initial"
      const tips = allTips.filter((tip) => {
        return tip.selected_outcomes?.some(
          (outcome: any) => outcome.result === "initial"
        );
      });

      if (tips.length === 0) {
        console.log("ℹ️  Aucun tip en attente de mise à jour");
        return;
      }

      console.log(
        `📊 ${tips.length} tips trouvés avec des outcomes non mis à jour`
      );

      // Extraire tous les match_ids uniques
      const matchIds = new Set<string>();
      tips.forEach((tip) => {
        tip.selected_outcomes.forEach((outcome: any) => {
          if (outcome.match?.match_id && outcome.result === "initial") {
            matchIds.add(outcome.match.match_id);
          }
        });
      });

      // Mettre à jour les tips pour tous les matches
      await this.updateTipsForMatches(Array.from(matchIds));
    } catch (error) {
      console.error(
        "❌ Erreur lors de la mise à jour des tips en attente:",
        error
      );
      throw error;
    }
  }
}
