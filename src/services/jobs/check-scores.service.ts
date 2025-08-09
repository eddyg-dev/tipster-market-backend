import { supabase } from "../../config/supabase";
import { OutcomeResult } from "../../shared-data/enums/outcome-result.enum";
import { OutcomeType } from "../../shared-data/enums/outcome-type.enum";
import { ScoreResponse } from "../../shared-data/models/odds-api-response/score-response.model";
import { OddsApiService } from "../odds-api.service";

export class CheckScoresService {
  static async execute() {
    try {
      const allRecentScores = await OddsApiService.getScores();
      const completeScores = allRecentScores.filter((score) => score.completed);

      // Mettre à jour les outcomes des matches avec des scores complétés
      await this.updateMatchOutcomes(completeScores);

      return { success: true, message: "Results checked" };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Erreur",
      };
    }
  }

  /**
   * Met à jour les outcomes des matches basée sur les scores complétés
   */
  private static async updateMatchOutcomes(completeScores: ScoreResponse[]) {
    for (const score of completeScores) {
      try {
        // Récupérer le match depuis la base de données
        const { data: match, error: matchError } = await supabase
          .from("matches")
          .select("*")
          .eq("match_id", score.id)
          .single();

        if (matchError || !match) {
          console.log(`Match non trouvé pour l'ID: ${score.id}`);
          continue;
        }

        // Calculer le résultat du match
        const matchResult = this.calculateMatchResult(score);

        // Mettre à jour les outcomes du match
        const updatedOutcomes = this.updateOutcomesWithResult(
          match.outcomes,
          matchResult,
          score
        );

        // Sauvegarder les outcomes mis à jour
        const { error: updateError } = await supabase
          .from("matches")
          .update({ outcomes: updatedOutcomes })
          .eq("match_id", score.id);

        if (updateError) {
          console.error(
            `Erreur lors de la mise à jour du match ${score.id}:`,
            updateError
          );
        } else {
          console.log(`Outcomes mis à jour pour le match ${score.id}`);
        }
      } catch (error) {
        console.error(`Erreur lors du traitement du score ${score.id}:`, error);
      }
    }
  }

  /**
   * Calcule le résultat du match basé sur les scores
   */
  private static calculateMatchResult(score: any): string {
    if (!score.scores || score.scores.length < 2) {
      throw new Error("Scores invalides");
    }

    const homeScoreValue = parseInt(score.scores[0]?.score || "0");
    const awayScoreValue = parseInt(score.scores[1]?.score || "0");

    if (homeScoreValue > awayScoreValue) {
      return score.home_team;
    } else if (awayScoreValue > homeScoreValue) {
      return score.away_team;
    } else {
      return "draw";
    }
  }

  /**
   * Met à jour les outcomes avec le résultat du match
   */
  private static updateOutcomesWithResult(
    outcomes: any[],
    matchResult: string,
    score: any
  ): any[] {
    return outcomes.map((outcome) => {
      const updatedOutcome = { ...outcome };
      switch (outcome.type) {
        case OutcomeType.H2H:
          if (outcome.name === matchResult) {
            updatedOutcome.result = OutcomeResult.Right;
          } else {
            updatedOutcome.result = OutcomeResult.Wrong;
          }
          break;

        case "totals":
          // Pour les totals, il faudrait comparer avec le total réel
          // Pour l'instant, on laisse en 'Initial'
          break;

        case "spreads":
          // Pour les spreads, il faudrait comparer avec l'écart réel
          // Pour l'instant, on laisse en 'Initial'
          break;
      }

      return updatedOutcome;
    });
  }
}
