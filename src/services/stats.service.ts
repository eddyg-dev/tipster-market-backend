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
      const points = await this.calculatePoints(tipsterId, tips);

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

        // Seulement pour les tips terminés, on ajoute les gains si gagné
        if (
          tip.status === TipStatus.HISTORICAL &&
          tip.result === TipResult.WON
        ) {
          // Si gagné, on ajoute les gains (montant * cote)
          tipResult += tip.amount * tip.price;
        }
        // Pour les tips actifs ou perdus, on garde seulement la soustraction de la mise

        return sum + tipResult;
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
