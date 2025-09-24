import { supabase } from "../../config/supabase";
import { ScoreResponse } from "../../shared-data/models/odds-api-response/score-response.model";
import { OddsApiService } from "../odds-api.service";
import { TipOutcomeUpdateService } from "../tip-outcome-update.service";

export class UpdateScoresService {
  static async execute() {
    try {
      const oddsApiLastScores = await OddsApiService.getScores();
      const completeScores = oddsApiLastScores.filter(
        (score) => score.completed
      );
      await this.updateMatchScores(completeScores);
      return { success: true, message: "Match results updated" };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Erreur",
      };
    }
  }

  private static async updateMatchScores(completeScores: ScoreResponse[]) {
    if (completeScores.length === 0) {
      console.log("Aucun score à mettre à jour");
      return;
    }

    try {
      // Préparer les données pour la mise à jour en lot
      const updates = completeScores.map((scoreResponse) => ({
        match_id: scoreResponse.id,
        scores: scoreResponse.scores,
      }));

      console.log(
        `🔄 Mise à jour de ${updates.length} matches en une seule requête...`
      );

      // Utiliser upsert pour mettre à jour tous les matches en une seule requête
      const { data, error } = await supabase
        .from("matches")
        .upsert(updates, {
          onConflict: "match_id",
          ignoreDuplicates: false,
        })
        .select("match_id");

      if (error) {
        throw new Error(
          `Erreur lors de la mise à jour en lot: ${error.message}`
        );
      }

      console.log(
        `✅ ${data?.length || updates.length} matches mis à jour avec succès`
      );

      // 5. Mettre à jour les outcomes des tips pour les matches mis à jour
      const updatedMatchIds = updates.map((update) => update.match_id);
      await TipOutcomeUpdateService.updateTipsForMatches(updatedMatchIds);
    } catch (error) {
      console.error("❌ Erreur lors de la mise à jour en lot:", error);
      // Fallback vers les mises à jour individuelles en cas d'erreur
      console.log("🔄 Tentative de mise à jour individuelle...");
      for (const scoreResponse of completeScores) {
        try {
          await this.addScoreToMatch(scoreResponse);
        } catch (individualError) {
          console.error(
            `Erreur lors du traitement du score ${scoreResponse.id}:`,
            individualError
          );
        }
      }
    }
  }

  private static async addScoreToMatch(
    scoreResponse: ScoreResponse
  ): Promise<void> {
    const { error: updateError } = await supabase
      .from("matches")
      .update({ scores: scoreResponse.scores })
      .eq("match_id", scoreResponse.id);

    if (updateError) {
      throw new Error(
        `Erreur lors de l'ajout du score pour le match ${scoreResponse.id}: ${updateError.message}`
      );
    }
  }
}
