import { Purchase } from "@tipster-market/shared-models";
import { Request, Response } from "express";
import { supabase } from "../config/supabase";

export class PurchaseController {
  /**
   * Crée un nouvel achat de tip
   */
  static async createPurchase(req: Request, res: Response): Promise<void> {
    const { tip_id, buyer_id } = req.body;

    if (!tip_id || !buyer_id) {
      res.status(400).json({ error: "tip_id et buyer_id requis" });
      return;
    }

    try {
      // Vérifier que le tip existe et est en vente
      const { data: tip, error: tipError } = await supabase
        .from("tips")
        .select("id, status, tipster_id")
        .eq("id", tip_id)
        .eq("status", "on_sale")
        .single();

      if (tipError || !tip) {
        res.status(404).json({ error: "Tip non trouvé ou non disponible" });
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
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: "Erreur serveur" });
    }
  }

  /**
   * Récupère les achats d'un utilisateur
   */
  static async getUserPurchases(req: Request, res: Response): Promise<void> {
    const { buyer_id } = req.params;

    try {
      const { data, error } = await supabase
        .from("tip_purchases")
        .select(
          `
          *,
          tip:tips!inner (
            id,
            selected_outcomes,
            amount,
            price,
            sale_deadline,
            status,
            result,
            created_at,
            tipster:profiles!inner (
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
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(200).json(data as Purchase[]);
    } catch (error) {
      res.status(500).json({ error: "Erreur serveur" });
    }
  }
}
