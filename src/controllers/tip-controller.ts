import { Request, Response } from "express";
import { supabase } from "../config/supabase";
import { MatchDetails, Tip } from "../data/models/tip.model";
import { ValidationService } from "../services/validation.service";

export class TipController {
  /**
   * Crée un nouveau pronostic
   */
  static async createTip(req: Request, res: Response): Promise<void> {
    console.log("Corps de la requête:", req.body);

    if (
      !req.body ||
      !req.body.selectedOutcomes ||
      !req.body.amount ||
      !req.body.price
    ) {
      res.status(400).json({ error: "Données manquantes dans la requête" });
      return;
    }

    // Récupérer l'ID utilisateur depuis le token JWT
    const tipsterId = req.user?.id;
    if (!tipsterId) {
      res.status(401).json({ error: "Utilisateur non authentifié" });
      return;
    }

    const { selectedOutcomes, amount, price, analysis } = req.body;

    try {
      // Utiliser le service de validation
      const validation = await ValidationService.validateTipster(tipsterId);
      if (!validation.isValid) {
        res.status(400).json({ error: validation.error });
        return;
      }

      const { data, error } = await supabase.from("tips").insert({
        tipster_id: tipsterId,
        selected_outcomes: selectedOutcomes,
        amount,
        price,
        analysis,
        sale_deadline: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24h par défaut
        status: "on_sale",
        result: "pending",
      });

      if (error) {
        console.error("Erreur Supabase:", error);
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(201).json(data);
    } catch (error) {
      console.error("Erreur lors de la création du tip:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  /**
   * Récupère tous les tips avec les détails des matches
   */
  static async getTipsWithMatchsDetails(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      // Récupérer tous les pronostics avec les infos du tipster
      const { data: tips, error: tipsError } = await supabase.from("tips")
        .select(`
          *,
          profiles!inner (
            id,
            username,
            avatar_url
          )
        `);

      if (tipsError) {
        console.error("Erreur Supabase:", tipsError);
        res.status(500).json({ error: tipsError.message });
        return;
      }

      console.log(tips);

      // Enrichir avec les détails des matches
      for (const tip of tips) {
        for (const outcome of tip.selected_outcomes) {
          if (outcome.match_id) {
            const match = await this.getMatch(outcome.match_id);
            outcome.match = match;
          }
        }
      }

      res.status(200).json(tips as Tip[]);
    } catch (error) {
      console.error("Erreur lors de la récupération des tips:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  /**
   * Récupère les tips d'un tipster spécifique
   */
  static async getTipsByTipster(req: Request, res: Response): Promise<void> {
    try {
      const { tipsterId } = req.params;

      // Utiliser le service de validation
      const validation = await ValidationService.validateTipster(tipsterId);
      if (!validation.isValid) {
        res.status(404).json({ error: validation.error });
        return;
      }

      const { data: tips, error: tipsError } = await supabase
        .from("tips")
        .select("*")
        .eq("tipster_id", tipsterId)
        .order("created_at", { ascending: false });

      if (tipsError) {
        console.error("Erreur Supabase:", tipsError);
        res.status(500).json({ error: tipsError.message });
        return;
      }

      res.status(200).json(tips);
    } catch (error) {
      console.error("Erreur lors de la récupération des tips:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async getMatch(id: string): Promise<MatchDetails | null> {
    try {
      const { data } = await supabase
        .from("matches")
        .select("*")
        .eq("id", id)
        .single();
      return data as MatchDetails | null;
    } catch (error) {
      console.error("Erreur lors de la récupération du match:", error);
      return null;
    }
  }
}
