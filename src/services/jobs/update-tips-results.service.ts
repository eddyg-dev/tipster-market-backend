import { supabase } from "../../config/supabase";

export class UpdateTipsResultsService {
  static async execute() {
    try {
      // Récupérer tous les matches qui ont des outcomes avec des résultats
      const { data: matchesWithResults, error: matchesError } = await supabase
        .from("matches")
        .select("*")
        .not("outcomes", "is", null);

      if (matchesError) {
        console.error(
          "Erreur lors de la récupération des matches:",
          matchesError
        );
        return {
          success: false,
          message: "Erreur lors de la récupération des matches",
        };
      }

      if (!matchesWithResults || matchesWithResults.length === 0) {
        console.log("Aucun match avec des résultats trouvé");
        return { success: true, message: "Aucun match à traiter" };
      }

      // Traiter chaque match qui a des résultats
      for (const match of matchesWithResults) {
        await this.updateTipsForMatch(match);
      }

      return { success: true, message: "Tips results updated" };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Erreur",
      };
    }
  }

  /**
   * Met à jour les tips pour un match spécifique
   */
  private static async updateTipsForMatch(match: any) {
    try {
      // Récupérer tous les tips qui utilisent ce match
      const { data: tips, error: tipsError } = await supabase
        .from("tips")
        .select("*")
        .contains("selectedOutcomes", [{ match_id: match.match_id }]);

      if (tipsError) {
        console.error(
          `Erreur lors de la récupération des tips pour le match ${match.match_id}:`,
          tipsError
        );
        return;
      }

      if (!tips || tips.length === 0) {
        console.log(`Aucun tip trouvé pour le match ${match.match_id}`);
        return;
      }

      // Mettre à jour chaque tip
      for (const tip of tips) {
        await this.updateTipWithMatchResults(tip, match);
      }
    } catch (error) {
      console.error(
        `Erreur lors de la mise à jour des tips pour le match ${match.match_id}:`,
        error
      );
    }
  }

  /**
   * Met à jour un tip spécifique avec les résultats du match
   */
  private static async updateTipWithMatchResults(tip: any, match: any) {
    try {
      const updatedSelectedOutcomes = tip.selectedOutcomes.map(
        (outcome: any) => {
          // Vérifier si cet outcome appartient au match en cours
          if (outcome.match_id === match.match_id) {
            // Trouver l'outcome correspondant dans les outcomes du match
            const matchOutcome = match.outcomes.find(
              (mo: any) => mo.id === outcome.id
            );

            if (matchOutcome && matchOutcome.result) {
              return {
                ...outcome,
                result: matchOutcome.result,
              };
            }
          }

          return outcome;
        }
      );

      // Vérifier si des changements ont été apportés
      const hasChanges =
        JSON.stringify(tip.selectedOutcomes) !==
        JSON.stringify(updatedSelectedOutcomes);

      if (hasChanges) {
        // Sauvegarder le tip mis à jour
        const { error: updateError } = await supabase
          .from("tips")
          .update({ selectedOutcomes: updatedSelectedOutcomes })
          .eq("id", tip.id);

        if (updateError) {
          console.error(
            `Erreur lors de la mise à jour du tip ${tip.id}:`,
            updateError
          );
        } else {
          console.log(`Tip ${tip.id} mis à jour avec les nouveaux résultats`);
        }
      }
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du tip ${tip.id}:`, error);
    }
  }
}
