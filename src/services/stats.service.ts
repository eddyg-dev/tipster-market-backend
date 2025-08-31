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

      const completedTips = tips.filter((tip) => tip.status !== TipStatus);
      const wonTips = completedTips.filter(
        (tip) => tip.result === TipResult.WON
      );
      const totalTips = completedTips.length;
      const winRate = totalTips > 0 ? (wonTips.length / totalTips) * 100 : 0;

      // Calculer le ROI
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

      // Calculer les gains totaux
      const totalEarnings = completedTips.reduce((sum, tip) => {
        if (tip.result === TipResult.WON) {
          return sum + (tip.amount * tip.price - tip.amount);
        }
        return sum - tip.amount;
      }, 0);

      return {
        win_rate: Math.round(winRate * 100) / 100,
        roi: Math.round(roi * 100) / 100,
        rank: 0,
        tips_count: totalTips,
        active_tips_count: completedTips.length,
        points: Math.round(totalEarnings * 100) / 100,
      };
    } catch (error) {
      console.error("Erreur lors du calcul des statistiques:", error);
      return {
        active_tips_count: 0,
        rank: 0,
        win_rate: 0,
        roi: 0,
        tips_count: 0,
        points: 0,
      };
    }
  }

  /**
   * Calcule le classement des tipsters
   */
  static async calculateTipsterRankings(): Promise<any[]> {
    try {
      // Récupérer tous les tipsters
      const { data: tipsters, error: tipstersError } = await supabase
        .from("profiles")
        .select("id, username, avatar_url")
        .eq("profile_type", "tipster");

      if (tipstersError) throw tipstersError;

      // Calculer les stats pour chaque tipster
      const tipstersWithStats = await Promise.all(
        tipsters.map(async (tipster) => {
          const stats = await this.calculateTipsterStats(tipster.id);
          return {
            ...tipster,
            ...stats,
          };
        })
      );

      // Trier par ROI décroissant
      return tipstersWithStats
        .filter((tipster) => tipster.tips_count > 0)
        .sort((a, b) => b.roi - a.roi)
        .map((tipster, index) => ({
          ...tipster,
          rank: index + 1,
        }));
    } catch (error) {
      console.error("Erreur lors du calcul des classements:", error);
      return [];
    }
  }
}
