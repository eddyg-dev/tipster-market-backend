import { Request, Response } from "express";
import { supabase } from "../config/supabase";

export class TipPurchaseController {
  /**
   * Crée un nouvel achat de tip
   */
  static async createPurchase(req: Request, res: Response): Promise<void> {
    if (!req.body || !req.body.tip_id || !req.body.buyer_id) {
      res.status(400).json({ error: "Données manquantes dans la requête" });
      return;
    }

    const { tip_id, buyer_id } = req.body;

    try {
      // Vérifier que l'acheteur existe et est un utilisateur (pas un tipster)
      const { data: buyer, error: buyerError } = await supabase
        .from("profiles")
        .select("id, username")
        .eq("id", buyer_id)
        .eq("profile_type", "user")
        .single();

      if (buyerError || !buyer) {
        res
          .status(400)
          .json({ error: "Acheteur invalide - doit être un utilisateur" });
        return;
      }

      // Vérifier si le tip existe et est disponible
      const { data: tip, error: tipError } = await supabase
        .from("tips")
        .select(
          `
          *,
          profiles!inner (
            id,
            username,
            profile_type
          )
        `
        )
        .eq("id", tip_id)
        .single();

      if (tipError || !tip) {
        res.status(404).json({ error: "Tip non trouvé" });
        return;
      }

      // Vérifier que le tipster est bien un tipster
      if (tip.profiles.profile_type !== "tipster") {
        res
          .status(400)
          .json({ error: "Le vendeur n'est pas un tipster valide" });
        return;
      }

      if (tip.status !== "on_sale") {
        res
          .status(400)
          .json({ error: "Ce tip n'est plus disponible à l'achat" });
        return;
      }

      // Vérifier que l'acheteur n'achète pas son propre tip
      if (tip.tipster_id === buyer_id) {
        res
          .status(400)
          .json({ error: "Vous ne pouvez pas acheter votre propre tip" });
        return;
      }

      // Créer l'achat
      const { data, error } = await supabase
        .from("tip_purchases")
        .insert({
          tip_id,
          buyer_id,
          status: "completed",
        })
        .select()
        .single();

      if (error) {
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
   * Récupère les achats d'un utilisateur
   */
  static async getUserPurchases(req: Request, res: Response): Promise<void> {
    const { buyer_id } = req.params;

    try {
      // Vérifier que l'utilisateur existe
      const { data: user, error: userError } = await supabase
        .from("profiles")
        .select("id, username")
        .eq("id", buyer_id)
        .eq("profile_type", "user")
        .single();

      if (userError || !user) {
        res.status(404).json({ error: "Utilisateur non trouvé" });
        return;
      }

      const { data, error } = await supabase
        .from("tip_purchases")
        .select(
          `
          *,
          tips!inner (
            id,
            selected_outcomes,
            amount,
            price,
            sale_deadline,
            status,
            result,
            created_at,
            profiles!inner (
              id,
              username,
              avatar_url
            )
          )
        `
        )
        .eq("buyer_id", buyer_id)
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
   * Annule un achat
   */
  static async cancelPurchase(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      const { data, error } = await supabase
        .from("tip_purchases")
        .update({ status: "cancelled" })
        .eq("id", id)
        .select()
        .single();

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
}
