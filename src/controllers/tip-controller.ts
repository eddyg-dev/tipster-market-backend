import { Request, Response } from "express";
import { supabase } from "../config/supabase";
import { MatchDetails, TipResponse } from "../data/models/tip-response.model";

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

    const { selectedOutcomes, amount, price } = req.body;

    const { data, error } = await supabase.from("tips").insert({
      selected_outcomes: selectedOutcomes,
      amount: amount,
      price: price,
      sale_deadline: new Date().toISOString(),
      status: "on_sale",
      result: "pending",
    });

    if (error) {
      console.error("Erreur Supabase:", error);
      res.status(500).json({ error: error.message });
      return;
    }

    res.status(200).json(data);
  }

  static async getTipsWithMatchsDetails(
    req: Request,
    res: Response
  ): Promise<void> {
    // Récupérer tous les pronostics
    const { data: tips, error: tipsError } = await supabase
      .from("tips")
      .select("*");

    if (tipsError) {
      console.error("Erreur Supabase:", tipsError);
      res.status(500).json({ error: tipsError.message });
      return;
    }

    console.log(tips);

    for (const tip of tips) {
      for (const outcome of tip.selected_outcomes) {
        // const match = await this.getMatch(outcome.match.id);
        const match = await this.getMatch(
          "3ab8fda6-81e2-4a18-88a7-214b51f7ae95"
        );
        outcome.match = match;
      }
    }

    res.status(200).json(tips as TipResponse[]);
  }

  static async getMatch(id: string): Promise<MatchDetails | null> {
    const { data } = await supabase
      .from("matches")
      .select("*")
      .eq("id", id)
      .single();
    return data as MatchDetails | null;
  }
}
