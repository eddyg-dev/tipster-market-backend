import { Request, Response } from "express";
import { supabaseAdmin } from "../config/supabase-admin";
import { StatsService } from "../services/stats.service";
import { TipService } from "../services/tip.service";
import { TipResult } from "../shared-data/enums/tip-result.enum";

export class TipController {
  /**
   * Crée un nouveau pronostic
   */
  static async createTip(req: Request, res: Response): Promise<void> {
    if (
      !req.body ||
      !req.body.selectedOutcomes ||
      !req.body.amount ||
      !req.body.price
    ) {
      res.status(400).json({ error: "Données manquantes dans la requête" });
      return;
    }

    const tipsterId = req.user?.id;
    if (!tipsterId) {
      res.status(401).json({ error: "Utilisateur non authentifié" });
      return;
    }

    const { selectedOutcomes, amount, price, analysis } = req.body;

    try {
      // Calculer les stats actuelles du tipster (stateless - calculées à la volée)
      const stats = await StatsService.calculateTipsterStats(tipsterId);
      const currentPoints = stats.points;

      console.log(`💰 Points actuels du tipster ${tipsterId}: ${currentPoints}`);
      console.log(`🎲 Montant du tip: ${amount}`);

      // Vérifier si l'utilisateur a assez de points
      if (currentPoints < amount) {
        res.status(400).json({
          error: "Points insuffisants",
          message: `Vous avez ${currentPoints} points mais vous essayez d'en miser ${amount}`,
          currentPoints,
          requestedAmount: amount,
        });
        return;
      }

      const deadline = TipService.calculateTipDeadline(selectedOutcomes);
      const { data, error } = await supabaseAdmin.from("tips").insert({
        tipster_id: tipsterId,
        selected_outcomes: selectedOutcomes,
        amount,
        price,
        analysis,
        deadline,
        result: TipResult.INITIAL,
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

  static async getTips(req: Request, res: Response): Promise<void> {
    try {
      const { data: tipsData, error: tipsError } = await supabaseAdmin
        .from("tips")
        .select("*")
        .order("created_at", { ascending: false });

      if (tipsError) {
        res.status(500).json({ error: tipsError.message });
        return;
      }

      const enrichedTips = await Promise.all(
        tipsData.map(async (tip) => {
          const { data: tipsterData, error: tipsterError } = await supabaseAdmin
            .from("profiles")
            .select("id, username, avatar_url")
            .eq("id", tip.tipster_id)
            .single();

          if (!tipsterError && tipsterData) {
            return {
              ...tip,
              tipster: tipsterData,
            };
          }

          return tip;
        })
      );

      res.status(200).json(enrichedTips);
    } catch (error) {
      console.error("Erreur lors de la récupération des tips:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async getTip(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      const { data: tip, error: tipError } = await supabaseAdmin
        .from("tips")
        .select("*")
        .eq("id", id)
        .single();

      if (tipError) {
        res.status(500).json({ error: tipError.message });
        return;
      }

      // Enrichir le tip avec les données du tipster
      const { data: tipsterData, error: tipsterError } = await supabaseAdmin
        .from("profiles")
        .select("id, username, avatar_url")
        .eq("id", tip.tipster_id)
        .single();

      if (!tipsterError && tipsterData) {
        const enrichedTip = {
          ...tip,
          tipster: tipsterData,
        };
        res.status(200).json(enrichedTip);
        return;
      }

      res.status(200).json(tip);
    } catch (error) {
      console.error("Erreur lors de la récupération du tip:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }

  static async getTipsByTipsterId(req: Request, res: Response): Promise<void> {
    const { tipsterId } = req.params;
    const { data: tipsData, error: tipsError } = await supabaseAdmin
      .from("tips")
      .select("*")
      .eq("tipster_id", tipsterId)
      .order("created_at", { ascending: false });

    if (tipsError) {
      res.status(500).json({ error: tipsError.message });
      return;
    }

    res.status(200).json(tipsData);
  }
}
