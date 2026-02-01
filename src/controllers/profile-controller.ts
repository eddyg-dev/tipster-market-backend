import { User } from "@supabase/supabase-js";
import { Request, Response } from "express";
import { supabaseAdmin } from "../config/supabase-admin";
import { StatsService } from "../services/stats.service";
import { ProfileType } from "../shared-data/enums/profile-type.enum";
import { SubscriptionLevel } from "../shared-data/enums/subscription-level.enum";
import { Profile } from "../shared-data/models/profile.model";
import { Tipster } from "../shared-data/models/tipster.model";

export class ProfileController {
  static async getProfiles(req: Request, res: Response): Promise<void> {
    try {
      const { data, error } = await supabaseAdmin.from("profiles").select("*");

      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }
      res.status(200).json(data as Profile[]);
    } catch (error) {
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  /**
   * Récupère uniquement les tipsters avec leurs statistiques
   */
  static async getTipsters(req: Request, res: Response): Promise<void> {
    try {
      const { data: tipsters, error } = await supabaseAdmin
        .from("profiles")
        .select("id, username, avatar_url, created_at, updated_at")
        .eq("profile_type", "tipster")
        .order("username", { ascending: true });

      if (error) {
        res.status(500).json({ error: error.message });
        return;
      }

      // Ajouter les statistiques pour chaque tipster
      const tipstersWithStats = await Promise.all(
        tipsters.map(async (tipster) => {
          const stats = await StatsService.calculateTipsterStats(tipster.id);
          return {
            ...tipster,
            stats: stats,
          };
        })
      );

      res.status(200).json(tipstersWithStats);
    } catch (error) {
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async getProfileById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      const { data, error } = await supabaseAdmin
        .from("profiles")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        res.status(404).json({ error: "Profil non trouvé" });
        return;
      }
      const profileType = data?.profile_type;

      if (profileType === ProfileType.TIPSTER) {
        // Ajouter les statistiques pour les tipsters
        const stats = await StatsService.calculateTipsterStats(id);
        const tipsterWithStats = {
          ...data,
          stats: stats,
        };
        res.status(200).json(tipsterWithStats as Tipster);
        return;
      } else if (profileType === ProfileType.USER) {
        res.status(200).json(data as User);
        return;
      }

      res.status(200).json(data as Profile);
    } catch (error) {
      console.error("Erreur lors de la récupération du profil:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async getTipsterById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      const { data, error } = await supabaseAdmin
        .from("profiles")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        res.status(404).json({ error: "Tipster non trouvé" });
        return;
      }

      // Vérifier que c'est bien un tipster
      if (data.profile_type !== ProfileType.TIPSTER) {
        res.status(400).json({ error: "Le profil n'est pas un tipster" });
        return;
      }

      // Ajouter les statistiques
      const stats = await StatsService.calculateTipsterStats(id);
      const tipsterWithStats = {
        ...data,
        stats: stats,
      };

      res.status(200).json(tipsterWithStats);
    } catch (error) {
      console.error("Erreur lors de la récupération du tipster:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async saveProfileIntroduction(
    req: Request,
    res: Response
  ): Promise<void> {
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

    const { username, birthDate, profileType, acceptTerms, avatarUrl, email } =
      req.body;
    const userId = req.params.id;

    // Seul l'utilisateur authentifié peut mettre à jour son propre profil
    if (req.user?.id !== userId) {
      res.status(403).json({ error: "Non autorisé à modifier ce profil" });
      return;
    }

    try {
      // supabaseAdmin (service_role) contourne RLS : permet INSERT si le profil
      // n'existe pas encore (trigger manqué) ou UPDATE pour compléter l'intro
      const { data, error } = await supabaseAdmin.from("profiles").upsert(
        {
          id: userId,
          username: username,
          birth_date: birthDate,
          profile_type: profileType,
          accept_terms: acceptTerms,
          avatar_url: avatarUrl,
          profile_introduction_completed: true,
          subscription_level: SubscriptionLevel.FREE,
          email: email ?? undefined,
        },
        {
          onConflict: "id",
        }
      );

      if (error) {
        console.error("Erreur Supabase:", error);
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(200).json(data as Profile | null);
    } catch (error) {
      console.error("Erreur lors de la sauvegarde:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async getAllPseudos(req: Request, res: Response): Promise<void> {
    try {
      const { data, error } = await supabaseAdmin
        .from("profiles")
        .select("username")
        .eq("profile_type", "tipster");
      res.status(200).json(data?.map((item) => item.username) as string[]);
    } catch (error) {
      console.error("Erreur lors de la récupération des pseudos:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async deleteMyProfile(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;
    if (req.user?.id !== userId) {
      res.status(403).json({ error: "Non autorisé à supprimer ce profil" });
      return;
    }
    try {
      const { data, error } = await supabaseAdmin.from("profiles").delete().eq("id", userId);
      if (error) throw error;
      res.json({ success: true, message: "Profil supprimé avec succès" });
    } catch (error) {
      console.error("Erreur lors de la suppression du profil:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }
}
