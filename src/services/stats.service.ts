import moment from "moment";
import { supabase } from "../config/supabase";
import { TipsterStats } from "../shared-data";
import { TipResult } from "../shared-data/enums/tip-result.enum";
import { TipStatus } from "../shared-data/enums/tip-status.enum";

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

      const completedTips = tips.filter(
        (tip) => tip.status === TipStatus.HISTORICAL
      );
      const activeTips = tips.filter(
        (tip) => tip.status === TipStatus.IN_PROGRESS
      );

      const winRate = this.calculateWinRate(completedTips);
      const roi = this.calculateROI(completedTips);
      const points = await this.calculatePoints(tipsterId, completedTips);

      return {
        win_rate: winRate,
        roi: roi,
        tips_count: completedTips.length,
        odd_average: this.calculateOddAverage(completedTips),
        active_tips_count: activeTips.length,
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
  private static calculateWinRate(completedTips: any[]): number {
    if (completedTips.length === 0) return 0;

    const wonTips = completedTips.filter((tip) => tip.result === TipResult.WON);

    const winRate = (wonTips.length / completedTips.length) * 100;
    return Math.round(winRate * 100) / 100;
  }

  /**
   * Calcule le ROI (Return on Investment)
   */
  private static calculateROI(completedTips: any[]): number {
    let totalInvestment = 0;
    let totalReturn = 0;

    completedTips.forEach((tip) => {
      if (tip.result === TipResult.WON) {
        totalReturn += tip.amount * tip.price;
      }
      totalInvestment += tip.amount;
    });

    const roi =
      totalInvestment > 0
        ? ((totalReturn - totalInvestment) / totalInvestment) * 100
        : 0;

    return Math.round(roi * 100) / 100;
  }

  /**
   * Calcule les points selon le nouveau système :
   * - 20 points par jour depuis le 01/09/2025
   * - + gains des pronostics gagnés (montant * cote - mise)
   * - - mise des pronostics perdus
   */
  private static async calculatePoints(
    tipsterId: string,
    completedTips: any[]
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
      const tipsPoints = completedTips.reduce((sum, tip) => {
        if (tip.result === TipResult.WON) {
          // Gains = (montant * cote) - mise
          const gains = tip.amount * tip.price - tip.amount;
          return sum + gains;
        } else if (tip.result === TipResult.LOST) {
          // Perte = mise
          return sum - tip.amount;
        }
        return sum;
      }, 0);

      const totalPoints = basePoints + tipsPoints;
      return Math.round(totalPoints * 100) / 100;
    } catch (error) {
      console.error("Erreur lors du calcul des points:", error);
      return 0;
    }
  }

  private static calculateOddAverage(completedTips: any[]): number {
    if (completedTips.length === 0) return 0;
    const totalOdd = completedTips.reduce((sum, tip) => sum + tip.price, 0);
    return Math.round((totalOdd / completedTips.length) * 100) / 100;
  }
}
