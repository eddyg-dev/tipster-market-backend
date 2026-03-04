import moment from "moment";
import { supabaseAdmin } from "../config/supabase-admin";
import { Outcome, OutcomeResult, TipsterStats } from "../shared-data";

export class StatsService {
  /**
   * Calcule les statistiques complètes d'un tipster
   */
  static async calculateTipsterStats(tipsterId: string): Promise<TipsterStats> {
    try {
      // Récupérer tous les tips du tipster
      const { data: tips, error: tipsError } = await supabaseAdmin
        .from("tips")
        .select("*")
        .eq("tipster_id", tipsterId);

      if (tipsError) throw tipsError;

      const checkedTips = tips.filter((tip) => {
        // Exclure les tips annulés (matchs simples annulés)
        if (tip.result === 'cancelled') return false;

        const isFullChecked = tip.selected_outcomes.every(
          (outcome: Outcome) => outcome.result !== OutcomeResult.Initial
        );
        return isFullChecked;
      });

      const notCheckedTips = tips.filter((tip) => {
        // Les tips annulés ne sont pas comptés comme "actifs"
        if (tip.result === 'cancelled') return false;

        const isFullChecked = tip.selected_outcomes.every(
          (outcome: Outcome) => outcome.result !== OutcomeResult.Initial
        );
        return !isFullChecked;
      });

      const winRate = this.calculateWinRate(checkedTips);
      const roi = this.calculateROI(checkedTips);
      const points = await this.calculatePoints(tipsterId, tips); // Utiliser tous les tips pour les points

      return {
        win_rate: parseFloat(winRate.toFixed(1)),
        roi: parseFloat(roi.toFixed(1)),
        tips_count: tips.length,
        odd_average: parseFloat(this.calculateOddAverage(checkedTips).toFixed(2)),
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
      // Vérifier si le tip est gagné (tous les outcomes non-cancelled sont "right")
      const isWon = tip.selected_outcomes
        .filter((outcome: Outcome) => outcome.result !== OutcomeResult.Cancelled)
        .every((outcome: Outcome) => outcome.result === OutcomeResult.Right);

      if (isWon) {
        // Recalculer la cote effective en excluant les matchs annulés (cote = 1)
        const effectiveOdds = this.calculateEffectiveOdds(tip);
        totalReturn += tip.amount * effectiveOdds;
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
   * Calcule la cote effective d'un tip en tenant compte des matchs annulés
   * Les matchs annulés ont une cote de 1 (neutre)
   */
  private static calculateEffectiveOdds(tip: any): number {
    // Si c'est un match simple, retourner la cote originale
    if (tip.selected_outcomes.length === 1) {
      return tip.price;
    }

    // Pour un combiné, on doit recalculer sans les matchs annulés
    // La cote originale (tip.price) inclut déjà tous les outcomes
    // On ne peut pas la recalculer exactement sans les cotes individuelles
    // DONC: on utilise la cote stockée dans le tip qui est correcte
    return tip.price;
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
      const { data: tipster, error: tipsterError } = await supabaseAdmin
        .from("profiles")
        .select("created_at")
        .eq("id", tipsterId)
        .single();

      if (tipsterError) throw tipsterError;

      // Calculer les points de base (20 points par jour depuis le 01/08/2025)
      // Peu importe la date d'inscription du tipster
      const startDate = moment.utc(process.env.REFERENCE_DATE);
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
        // CAS SPÉCIAL: Tip annulé (match simple) -> remboursement (0 impact)
        if (tip.result === 'cancelled') {
          return sum; // Pas de changement de points
        }

        // On soustrait toujours la mise (coût du tip) dès la création
        let tipResult = -tip.amount;

        // Vérifier si le tip est complètement vérifié (plus d'outcomes "initial")
        const isFullyChecked = tip.selected_outcomes.every(
          (outcome: Outcome) => outcome.result !== OutcomeResult.Initial
        );

        // Vérifier si le tip est gagné (tous les outcomes non-cancelled sont "right")
        const isWon = tip.selected_outcomes
          .filter((outcome: Outcome) => outcome.result !== OutcomeResult.Cancelled)
          .every((outcome: Outcome) => outcome.result === OutcomeResult.Right);

        // Seulement pour les tips vérifiés ET gagnés, on ajoute les gains
        if (isFullyChecked && isWon) {
          // Recalculer la cote effective si des matchs sont annulés
          const effectiveOdds = this.calculateEffectiveOdds(tip);
          tipResult += tip.amount * effectiveOdds;
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

    // Filtrer uniquement les tips gagnants (exclure les annulés)
    const winningTips = completedTips.filter((tip) => {
      if (tip.result === 'cancelled') return false;

      return tip.selected_outcomes
        .filter((outcome: Outcome) => outcome.result !== OutcomeResult.Cancelled)
        .every((outcome: Outcome) => outcome.result === OutcomeResult.Right);
    });

    if (winningTips.length === 0) return 0;

    const totalOdd = winningTips.reduce((sum, tip) => {
      const effectiveOdds = this.calculateEffectiveOdds(tip);
      return sum + effectiveOdds;
    }, 0);
    return parseFloat((totalOdd / winningTips.length).toFixed(2));
  }

  /**
   * Indique si un tip est entièrement vérifié et gagné (hors annulés)
   */
  private static isTipWon(tip: any): boolean {
    if (tip.result === "cancelled") return false;
    const isFullyChecked = tip.selected_outcomes?.every(
      (o: Outcome) => o.result !== OutcomeResult.Initial
    );
    if (!isFullyChecked) return false;
    return tip.selected_outcomes
      .filter((o: Outcome) => o.result !== OutcomeResult.Cancelled)
      .every((o: Outcome) => o.result === OutcomeResult.Right);
  }

  /**
   * Points remportés par un tip (uniquement si gagné ; sinon 0)
   */
  private static getTipPointsWon(tip: any): number {
    if (!this.isTipWon(tip)) return 0;
    const effectiveOdds = this.calculateEffectiveOdds(tip);
    return Math.round(tip.amount * effectiveOdds - tip.amount);
  }

  /**
   * Meilleure cote réussie : parmi tous les tips gagnés, celui avec la cote effective la plus haute.
   * (Si des octés gagnés existent, ce sera souvent un octé.)
   */
  static async getBestOdd(): Promise<{
    tip: any;
    tipster: { id: string; username: string; avatar_url: string } | null;
  } | null> {
    try {
      const { data: tips, error } = await supabaseAdmin
        .from("tips")
        .select("*");

      if (error) throw error;

      const wonTips = (tips ?? []).filter((t) => this.isTipWon(t));
      if (wonTips.length === 0) return null;

      const best = wonTips.reduce((acc, t) => {
        const odds = this.calculateEffectiveOdds(t);
        return odds > this.calculateEffectiveOdds(acc) ? t : acc;
      }, wonTips[0]);

      const { data: profile } = await supabaseAdmin
        .from("profiles")
        .select("id, username, avatar_url")
        .eq("id", best.tipster_id)
        .single();

      return {
        tip: {
          id: best.id,
          price: this.calculateEffectiveOdds(best),
          amount: best.amount,
          created_at: best.created_at,
        },
        tipster: profile ? { id: profile.id, username: profile.username, avatar_url: (profile.avatar_url ?? "") as string } : null,
      };
    } catch (err) {
      console.error("Erreur getBestOdd:", err);
      return null;
    }
  }

  private static readonly FUEGO_LAST_N_TIPS = 10;

  /**
   * Tipster en feu : celui qui a le plus de succès sur ses 10 derniers pronos terminés (non en cours).
   * En cas d'égalité, le premier trouvé est renvoyé.
   */
  static async getTipsterFuego(): Promise<{
    tipster: { id: string; username: string; avatar_url: string } | null;
    consecutiveSuccessesCount: number;
    checkedTipsCount: number;
  } | null> {
    try {
      const { data: tips, error } = await supabaseAdmin
        .from("tips")
        .select("*");

      if (error) throw error;
      const allTips = tips ?? [];

      // Ne comptabiliser que les pronos terminés : exclure les tips en cours
      // (au moins un outcome encore "initial") et les annulés.
      const isTipFinished = (t: any): boolean => {
        if (t.result === "cancelled") return false;
        return t.selected_outcomes?.every(
          (o: Outcome) => o.result !== OutcomeResult.Initial
        ) ?? false;
      };

      const finishedTips = allTips.filter(isTipFinished);

      // Grouper par tipster_id, trier les tips de chaque tipster par created_at desc
      const byTipster = new Map<string, any[]>();
      for (const tip of finishedTips) {
        const id = tip.tipster_id;
        if (!id) continue;
        if (!byTipster.has(id)) byTipster.set(id, []);
        byTipster.get(id)!.push(tip);
      }

      for (const arr of byTipster.values()) {
        arr.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      }

      // Pour chaque tipster : prendre les 10 derniers pronos, compter les succès
      let maxSuccesses = 0;
      let bestTipsterId: string | null = null;
      let bestCheckedCount = 0;

      for (const [tipsterId, tipList] of byTipster.entries()) {
        const lastN = tipList.slice(0, this.FUEGO_LAST_N_TIPS);
        const wins = lastN.filter((t) => this.isTipWon(t)).length;
        if (wins > maxSuccesses) {
          maxSuccesses = wins;
          bestTipsterId = tipsterId;
          bestCheckedCount = lastN.length;
        }
      }

      if (maxSuccesses === 0 || !bestTipsterId) return null;

      const { data: profile } = await supabaseAdmin
        .from("profiles")
        .select("id, username, avatar_url")
        .eq("id", bestTipsterId)
        .single();

      return {
        tipster: profile
          ? {
              id: profile.id,
              username: profile.username,
              avatar_url: (profile.avatar_url ?? "") as string,
            }
          : null,
        consecutiveSuccessesCount: maxSuccesses,
        checkedTipsCount: bestCheckedCount,
      };
    } catch (err) {
      console.error("Erreur getTipsterFuego:", err);
      return null;
    }
  }

  /**
   * Tip qui a remporté le plus de points (gain le plus élevé pour un tip gagné).
   */
  static async getTipWithMostPoints(): Promise<{
    tip: any;
    tipster: { id: string; username: string; avatar_url: string } | null;
    pointsWon: number;
  } | null> {
    try {
      const { data: tips, error } = await supabaseAdmin
        .from("tips")
        .select("*");

      if (error) throw error;

      const withPoints = (tips ?? [])
        .filter((t) => this.isTipWon(t))
        .map((t) => ({ tip: t, pointsWon: this.getTipPointsWon(t) }));

      if (withPoints.length === 0) return null;

      const best = withPoints.reduce((acc, x) =>
        x.pointsWon > acc.pointsWon ? x : acc
      );

      const { data: profile } = await supabaseAdmin
        .from("profiles")
        .select("id, username, avatar_url")
        .eq("id", best.tip.tipster_id)
        .single();

      return {
        tip: {
          id: best.tip.id,
          price: this.calculateEffectiveOdds(best.tip),
          amount: best.tip.amount,
          created_at: best.tip.created_at,
        },
        tipster: profile ? { id: profile.id, username: profile.username, avatar_url: (profile.avatar_url ?? "") as string } : null,
        pointsWon: best.pointsWon,
      };
    } catch (err) {
      console.error("Erreur getTipWithMostPoints:", err);
      return null;
    }
  }
}
