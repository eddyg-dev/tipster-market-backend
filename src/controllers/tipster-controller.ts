import { Request, Response } from "express";
import { supabase } from "../config/supabase";
import { StatsService } from "../services/stats.service";
import { ValidationService } from "../services/validation.service";

export class TipsterController {
  /**
   * Récupère tous les tipsters avec leurs stats calculées
   * @deprecated Utilisez /api/profiles/tipsters à la place
   */
  static async getAllTipsters(req: Request, res: Response): Promise<void> {
    try {
      // Rediriger vers le nouvel endpoint
      res.redirect("/api/profiles/tipsters");
    } catch (error) {
      console.error("Erreur serveur:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async getTipsterById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      // Utiliser le service de validation
      const validation = await ValidationService.validateTipster(id);
      if (!validation.isValid) {
        res.status(404).json({ error: validation.error });
        return;
      }

      // Récupérer les infos du tipster
      const { data: tipster, error: tipsterError } = await supabase
        .from("profiles")
        .select("id, username, avatar_url, created_at, updated_at")
        .eq("id", id)
        .single();

      if (tipsterError) {
        res.status(500).json({ error: tipsterError.message });
        return;
      }

      // Calculer les stats avec le service
      const stats = await StatsService.calculateTipsterStats(id);

      // Récupérer les tips avec détails
      const { data: tips, error: tipsError } = await supabase
        .from("tips")
        .select(
          `
          id,
          selected_outcomes,
          amount,
          price,
          sale_deadline,
          status,
          result,
          created_at
        `
        )
        .eq("tipster_id", id)
        .order("created_at", { ascending: false });

      if (tipsError) {
        console.error("Erreur Supabase:", tipsError);
        res.status(500).json({ error: tipsError.message });
        return;
      }

      const tipsterWithStats = {
        ...tipster,
        win_rate: stats.winRate,
        roi: stats.roi,
        tips_count: stats.totalTips,
        followers_count: stats.followersCount,
        total_earnings: stats.totalEarnings,
        tips,
      };

      res.status(200).json(tipsterWithStats);
    } catch (error) {
      console.error("Erreur serveur:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }
}
