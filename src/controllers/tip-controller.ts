import { Tip, TipStatus } from "@eddyg-dev/shared-models";
import { Request, Response } from "express";
import { supabase } from "../config/supabase";
import { ValidationService } from "../services/validation.service";

export class TipController {
  /**
   * Crée un nouveau pronostic
   */
  static async createTip(req: Request, res: Response): Promise<void> {
    console.log("=== CREATE TIP REQUEST ===");
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    console.log("User:", req.user);

    if (
      !req.body ||
      !req.body.selectedOutcomes ||
      !req.body.amount ||
      !req.body.price
    ) {
      console.log("Missing data validation failed:");
      console.log("- req.body exists:", !!req.body);
      console.log(
        "- req.body.selectedOutcomes exists:",
        !!req.body?.selectedOutcomes
      );
      console.log("- req.body.amount exists:", !!req.body?.amount);
      console.log("- req.body.price exists:", !!req.body?.price);
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
        deadline: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24h par défaut
        status: TipStatus.AVAILABLE,
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
    const { data, error } = await supabase
      .from("tips")
      .select(
        "id, tipster_id, selected_outcomes, amount, price, deadline, status, created_at, tipster:tipster_id(*)"
      )
      .order("created_at", { ascending: false });
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }

    const transformedData =
      data?.map((tip) => ({
        ...tip,
        selected_outcomes_count: Array.isArray(tip.selected_outcomes)
          ? tip.selected_outcomes.length
          : 0,
        selected_outcomes: [],
        tipster: tip.tipster,
      })) || [];

    res.status(200).json(transformedData as unknown as Tip[]);
  }

  static async getTip(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { data, error } = await supabase
      .from("tips")
      .select("* , tipster:tipster_id(*)")
      .eq("id", id)
      .single();
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.status(200).json(data);
  }
}
