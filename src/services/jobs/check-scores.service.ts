import { supabase } from "../../config/supabase";
import { ScoreResponse } from "../../shared-data/models/odds-api-response/score-response.model";
import { OddsApiService } from "../odds-api.service";

export class CheckScoresService {
  static async execute() {
    try {
      const allRecentScores = await OddsApiService.getScores();
      const completeScores = allRecentScores.filter((score) => score.completed);
      await this.updateMatchOutcomes(completeScores);
      return { success: true, message: "Match results updated" };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Erreur",
      };
    }
  }

  private static async updateMatchOutcomes(completeScores: ScoreResponse[]) {
    for (const scoreResponse of completeScores) {
      try {
        await this.addScoreToMatch(scoreResponse);
        // Les outcomes seront automatiquement mis à jour par le trigger PostgreSQL
      } catch (error) {
        console.error(
          `Erreur lors du traitement du score ${scoreResponse.id}:`,
          error
        );
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

    console.log(`Score ajouté pour le match ${scoreResponse.id}`);
  }
}
