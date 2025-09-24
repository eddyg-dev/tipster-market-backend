import moment from "moment";
import { supabase } from "../config/supabase";
import { Outcome, OutcomeResult, TipsterStats } from "../shared-data";

export class StatsService {
  /**
   * Calcule les statistiques complètes d'un tipster
   */
  static async calculateTipsterStats(tipsterId: string): Promise<TipsterStats> {
    try {
      // Récupérer tous les tips du tipster
      const { data: tips, error: tipsError } = await supabase
        .from("tips")
        .select("*")
        .eq("tipster_id", tipsterId);

      if (tipsError) throw tipsError;

      const checkedTips = tips.filter((tip) => {
        const isFullChecked = tip.selected_outcomes.every(
          (outcome: Outcome) => outcome.result !== OutcomeResult.Initial
        );
        return isFullChecked;
      });

      const notCheckedTips = tips.filter((tip) => {
        const isFullChecked = tip.selected_outcomes.every(
          (outcome: Outcome) => outcome.result !== OutcomeResult.Initial
        );
        return !isFullChecked;
      });

      const winRate = this.calculateWinRate(checkedTips);
      const roi = this.calculateROI(checkedTips);
      const points = await this.calculatePoints(tipsterId, checkedTips); // Utiliser tous les tips pour les points

      return {
        win_rate: winRate,
        roi: roi,
        tips_count: checkedTips.length,
        odd_average: this.calculateOddAverage(checkedTips),
        active_tips_count: notCheckedTips.length,
        total_tips_count: tips.length,
        points: points,
      };
    } catch (error) {
      console.error("Erreur lors du calcul des statistiques:", error);
      throw error;
    }
  }

  /**
   * Calcule le taux de réussite (win rate)
   */
  private static calculateWinRate(checkedTips: any[]): number {
    if (checkedTips.length === 0) return 0;

    const wonTips = checkedTips.filter((tip) => {
      // Un tip est gagné si tous les outcomes sont "right"
      return tip.selected_outcomes.every(
        (outcome: Outcome) => outcome.result === OutcomeResult.Right
      );
    });

    let winRate = (wonTips.length / checkedTips.length) * 100;
    winRate = parseFloat(winRate.toFixed(2));
    return winRate;
  }

  /**
   * Calcule le ROI (Return on Investment)
   */
  private static calculateROI(checkedTips: any[]): number {
    let totalInvestment = 0;
    let totalReturn = 0;

    checkedTips.forEach((tip) => {
      // Vérifier si le tip est gagné (tous les outcomes sont "right")
      const isWon = tip.selected_outcomes.every(
        (outcome: Outcome) => outcome.result === OutcomeResult.Right
      );

      if (isWon) {
        totalReturn += tip.amount * tip.price;
      }
      totalInvestment += tip.amount;
    });

    const roi =
      totalInvestment > 0
        ? ((totalReturn - totalInvestment) / totalInvestment) * 100
        : 0;

    return parseFloat(roi.toFixed(2));
  }

  /**
   * Calcule les points selon le nouveau système :
   * - 10 points par jour depuis le 01/09/2025
   * - - mise de tous les tips (actifs et terminés) dès la création
   * - + gains des pronostics gagnés (montant * cote) seulement si terminé et gagné
   */
  private static async calculatePoints(
    tipsterId: string,
    allTips: any[]
  ): Promise<number> {
    try {
      // Récupérer la date de création du tipster
      const { data: tipster, error: tipsterError } = await supabase
        .from("profiles")
        .select("created_at")
        .eq("id", tipsterId)
        .single();

      if (tipsterError) throw tipsterError;

      // Calculer les points de base (20 points par jour depuis le 01/08/2025)
      // Peu importe la date d'inscription du tipster
      const startDate = moment.utc("2025-09-01");
      const today = moment.utc();

      const daysSinceStart = today.diff(startDate, "days");
      const basePoints = Math.max(0, daysSinceStart * 10);

      // Calculer les points des pronostics
      // Logique : On soustrait toujours la mise, puis on ajoute les gains si gagné
      // Exemple : Tip de 10€ à 2.5 cotes
      // - Gagné : -10€ (mise) + 25€ (gains) = +15€
      // - Perdu : -10€ (mise) + 0€ = -10€
      // - Actif : -10€ (mise) + 0€ = -10€ (pas encore de résultat)
      const tipsPoints = allTips.reduce((sum, tip) => {
        // On soustrait toujours la mise (coût du tip) dès la création
        let tipResult = -tip.amount;

        // Vérifier si le tip est gagné (tous les outcomes sont "right")
        const isWon = tip.selected_outcomes.every(
          (outcome: Outcome) => outcome.result === OutcomeResult.Right
        );

        // Seulement pour les tips vérifiés ET gagnés, on ajoute les gains
        if (isWon) {
          // Si gagné, on ajoute les gains (montant * cote)
          tipResult += tip.amount * tip.price;
        }
        // Pour les tips perdus ou non vérifiés, on garde seulement la soustraction de la mise

        return sum + tipResult;
      }, 0);

      const totalPoints = basePoints + tipsPoints;
      return Math.round(totalPoints);
    } catch (error) {
      console.error("Erreur lors du calcul des points:", error);
      return 0;
    }
  }

  private static calculateOddAverage(completedTips: any[]): number {
    if (completedTips.length === 0) return 0;

    // Filtrer uniquement les tips gagnants
    const winningTips = completedTips.filter((tip) => {
      return tip.selected_outcomes.every(
        (outcome: Outcome) => outcome.result === OutcomeResult.Right
      );
    });

    if (winningTips.length === 0) return 0;

    const totalOdd = winningTips.reduce((sum, tip) => sum + tip.price, 0);
    return parseFloat((totalOdd / winningTips.length).toFixed(2));
  }
}
