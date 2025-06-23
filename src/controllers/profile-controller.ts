import { Request, Response } from "express";
import { supabase } from "../config/supabase";
import { ProfileResponse } from "../data/models/profile.model";
import { StatsService } from "../services/stats.service";

export class ProfileController {
  static async getProfiles(req: Request, res: Response): Promise<void> {
    try {
      const { data, error } = await supabase.from("profiles").select("*");

      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(200).json(data as ProfileResponse[]);
    } catch (error) {
      console.error("Erreur lors de la récupération des profils:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  /**
   * Récupère uniquement les tipsters avec leurs statistiques
   */
  static async getTipsters(req: Request, res: Response): Promise<void> {
    try {
      // Récupérer les tipsters de base
      const { data: tipsters, error } = await supabase
        .from("profiles")
        .select("id, username, avatar_url, created_at, updated_at")
        .eq("profile_type", "tipster")
        .order("username", { ascending: true });

      if (error) {
        console.error("Erreur Supabase:", error);
        res.status(500).json({ error: error.message });
        return;
      }

      // Calculer les statistiques pour chaque tipster
      const tipstersWithStats = await Promise.all(
        tipsters.map(async (tipster) => {
          const stats = await StatsService.calculateTipsterStats(tipster.id);
          return {
            ...tipster,
            win_rate: stats.winRate,
            roi: stats.roi,
            tips_count: stats.totalTips,
            followers_count: stats.followersCount,
            total_earnings: stats.totalEarnings,
          } as any;
        })
      );

      // Trier par ROI décroissant
      tipstersWithStats.sort((a, b) => b.roi - a.roi);

      // Ajouter le rank basé sur le tri
      tipstersWithStats.forEach((tipster, index) => {
        tipster.rank = index + 1;
      });

      res.status(200).json(tipstersWithStats);
    } catch (error) {
      console.error("Erreur lors de la récupération des tipsters:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async getProfileById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        res.status(404).json({ error: "Profil non trouvé" });
        return;
      }

      console.log("Profile data from DB:", data);
      console.log("Avatar URL from DB:", data.avatar_url);

      res.status(200).json(data as ProfileResponse);
    } catch (error) {
      console.error("Erreur lors de la récupération du profil:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async saveProfileIntroduction(
    req: Request,
    res: Response
  ): Promise<void> {
    console.log("Corps de la requête:", req.body);
    console.log("ID:", req.params.id);

    if (
      !req.body ||
      !req.body.username ||
      !req.body.birthDate ||
      !req.body.profileType ||
      !req.body.acceptTerms ||
      !req.body.avatarUrl
    ) {
      res.status(400).json({ error: "Données manquantes dans la requête" });
      return;
    }

    const { username, birthDate, profileType, acceptTerms, avatarUrl } =
      req.body;
    const userId = req.params.id;

    try {
      const { data, error } = await supabase.from("profiles").upsert({
        id: userId,
        username: username,
        birth_date: birthDate,
        profile_type: profileType,
        accept_terms: acceptTerms,
        avatar_url: avatarUrl,
        profile_introduction_completed: true,
      });

      if (error) {
        console.error("Erreur Supabase:", error);
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(200).json(data as ProfileResponse | null);
    } catch (error) {
      console.error("Erreur lors de la sauvegarde:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }
}
