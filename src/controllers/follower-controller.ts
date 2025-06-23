import { Request, Response } from "express";
import { supabase } from "../config/supabase";

export class FollowerController {
  /**
   * Suivre un tipster
   */
  static async followTipster(req: Request, res: Response): Promise<void> {
    const { follower_id, tipster_id } = req.body;

    if (!follower_id || !tipster_id) {
      res.status(400).json({ error: "follower_id et tipster_id sont requis" });
      return;
    }

    try {
      // Vérifier que le follower est un utilisateur
      const { data: follower, error: followerError } = await supabase
        .from("profiles")
        .select("id, username")
        .eq("id", follower_id)
        .eq("profile_type", "user")
        .single();

      if (followerError || !follower) {
        res
          .status(400)
          .json({ error: "Follower invalide - doit être un utilisateur" });
        return;
      }

      // Vérifier que le tipster existe
      const { data: tipster, error: tipsterError } = await supabase
        .from("profiles")
        .select("id, username")
        .eq("id", tipster_id)
        .eq("profile_type", "tipster")
        .single();

      if (tipsterError || !tipster) {
        res.status(400).json({ error: "Tipster invalide" });
        return;
      }

      // Vérifier qu'on ne se suit pas soi-même
      if (follower_id === tipster_id) {
        res
          .status(400)
          .json({ error: "Vous ne pouvez pas vous suivre vous-même" });
        return;
      }

      // Créer le follow
      const { data, error } = await supabase
        .from("followers")
        .insert({
          follower_id,
          tipster_id,
        })
        .select()
        .single();

      if (error) {
        if (error.code === "23505") {
          // Code d'erreur pour violation de contrainte unique
          res.status(409).json({ error: "Vous suivez déjà ce tipster" });
          return;
        }
        console.error("Erreur Supabase:", error);
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(201).json(data);
    } catch (error) {
      console.error("Erreur serveur:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  /**
   * Ne plus suivre un tipster
   */
  static async unfollowTipster(req: Request, res: Response): Promise<void> {
    const { follower_id, tipster_id } = req.params;

    try {
      const { data, error } = await supabase
        .from("followers")
        .delete()
        .eq("follower_id", follower_id)
        .eq("tipster_id", tipster_id)
        .select()
        .single();

      if (error) {
        console.error("Erreur Supabase:", error);
        res.status(500).json({ error: error.message });
        return;
      }

      if (!data) {
        res.status(404).json({ error: "Follow non trouvé" });
        return;
      }

      res.status(200).json({ message: "Follow supprimé avec succès" });
    } catch (error) {
      console.error("Erreur serveur:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  /**
   * Récupérer les tipsters suivis par un utilisateur
   */
  static async getFollowedTipsters(req: Request, res: Response): Promise<void> {
    const { follower_id } = req.params;

    try {
      const { data, error } = await supabase
        .from("followers")
        .select(
          `
          tipster_id,
          created_at,
          profiles!followers_tipster_id_fkey (
            id,
            username,
            avatar_url
          )
        `
        )
        .eq("follower_id", follower_id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Erreur Supabase:", error);
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(200).json(data);
    } catch (error) {
      console.error("Erreur serveur:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  /**
   * Récupérer les followers d'un tipster
   */
  static async getTipsterFollowers(req: Request, res: Response): Promise<void> {
    const { tipster_id } = req.params;

    try {
      const { data, error } = await supabase
        .from("followers")
        .select(
          `
          follower_id,
          created_at,
          profiles!followers_follower_id_fkey (
            id,
            username,
            avatar_url
          )
        `
        )
        .eq("tipster_id", tipster_id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Erreur Supabase:", error);
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(200).json(data);
    } catch (error) {
      console.error("Erreur serveur:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  /**
   * Vérifier si un utilisateur suit un tipster
   */
  static async checkFollowStatus(req: Request, res: Response): Promise<void> {
    const { follower_id, tipster_id } = req.params;

    try {
      const { data, error } = await supabase
        .from("followers")
        .select("id")
        .eq("follower_id", follower_id)
        .eq("tipster_id", tipster_id)
        .single();

      if (error && error.code === "PGRST116") {
        res.status(200).json({ isFollowing: false });
        return;
      }

      if (error) {
        console.error("Erreur Supabase:", error);
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(200).json({ isFollowing: true });
    } catch (error) {
      console.error("Erreur serveur:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  /**
   * Ajouter un tipster aux favoris (équivalent à follow)
   */
  static async addToFavorites(req: Request, res: Response): Promise<void> {
    const { user_id, tipster_id } = req.body;

    if (!user_id || !tipster_id) {
      res.status(400).json({ error: "user_id et tipster_id sont requis" });
      return;
    }

    try {
      // Vérifier que l'utilisateur existe
      const { data: user, error: userError } = await supabase
        .from("profiles")
        .select("id, username")
        .eq("id", user_id)
        .eq("profile_type", "user")
        .single();

      if (userError || !user) {
        res.status(400).json({ error: "Utilisateur invalide" });
        return;
      }

      // Vérifier que le tipster existe
      const { data: tipster, error: tipsterError } = await supabase
        .from("profiles")
        .select("id, username")
        .eq("id", tipster_id)
        .eq("profile_type", "tipster")
        .single();

      if (tipsterError || !tipster) {
        res.status(400).json({ error: "Tipster invalide" });
        return;
      }

      // Vérifier qu'on ne s'ajoute pas soi-même aux favoris
      if (user_id === tipster_id) {
        res
          .status(400)
          .json({
            error: "Vous ne pouvez pas vous ajouter vous-même aux favoris",
          });
        return;
      }

      // Créer le follow (équivalent à ajouter aux favoris)
      const { data, error } = await supabase
        .from("followers")
        .insert({
          follower_id: user_id,
          tipster_id: tipster_id,
        })
        .select()
        .single();

      if (error) {
        if (error.code === "23505") {
          res
            .status(409)
            .json({ error: "Ce tipster est déjà dans vos favoris" });
          return;
        }
        console.error("Erreur Supabase:", error);
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(201).json({
        message: "Tipster ajouté aux favoris avec succès",
        data,
      });
    } catch (error) {
      console.error("Erreur serveur:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  /**
   * Retirer un tipster des favoris (équivalent à unfollow)
   */
  static async removeFromFavorites(req: Request, res: Response): Promise<void> {
    const { user_id, tipster_id } = req.params;

    try {
      const { data, error } = await supabase
        .from("followers")
        .delete()
        .eq("follower_id", user_id)
        .eq("tipster_id", tipster_id)
        .select()
        .single();

      if (error) {
        console.error("Erreur Supabase:", error);
        res.status(500).json({ error: error.message });
        return;
      }

      if (!data) {
        res.status(404).json({ error: "Tipster non trouvé dans vos favoris" });
        return;
      }

      res
        .status(200)
        .json({ message: "Tipster retiré des favoris avec succès" });
    } catch (error) {
      console.error("Erreur serveur:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  /**
   * Récupérer les tipsters favoris d'un utilisateur
   */
  static async getFavorites(req: Request, res: Response): Promise<void> {
    const { user_id } = req.params;

    try {
      const { data, error } = await supabase
        .from("followers")
        .select(
          `
          tipster_id,
          created_at,
          profiles!followers_tipster_id_fkey (
            id,
            username,
            avatar_url
          )
        `
        )
        .eq("follower_id", user_id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Erreur Supabase:", error);
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(200).json(data);
    } catch (error) {
      console.error("Erreur serveur:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  /**
   * Vérifier si un tipster est dans les favoris
   */
  static async checkFavoriteStatus(req: Request, res: Response): Promise<void> {
    const { user_id, tipster_id } = req.params;

    try {
      const { data, error } = await supabase
        .from("followers")
        .select("id")
        .eq("follower_id", user_id)
        .eq("tipster_id", tipster_id)
        .single();

      if (error && error.code === "PGRST116") {
        res.status(200).json({ isFavorite: false });
        return;
      }

      if (error) {
        console.error("Erreur Supabase:", error);
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(200).json({ isFavorite: true });
    } catch (error) {
      console.error("Erreur serveur:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }
}
