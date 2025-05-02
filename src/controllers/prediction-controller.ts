import { Request, Response } from "express";
import { supabase } from "../config/supabase";
import {
  MatchDetails,
  PredictionResponse,
} from "../data/models/prediction-response.model";

export class PredictionController {
  /**
   * Crée une nouvelle prédiction
   */
  static async createPrediction(req: Request, res: Response): Promise<void> {
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

    const { data, error } = await supabase.from("predictions").insert({
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

  static async getPredictionsWithMatchsDetails(
    req: Request,
    res: Response
  ): Promise<void> {
    // Récupérer toutes les prédictions
    const { data: predictions, error: predictionsError } = await supabase
      .from("predictions")
      .select("*");

    if (predictionsError) {
      console.error("Erreur Supabase:", predictionsError);
      res.status(500).json({ error: predictionsError.message });
      return;
    }

    console.log(predictions);

    for (const prediction of predictions) {
      for (const outcome of prediction.selected_outcomes) {
        // const match = await this.getMatch(outcome.match.id);
        const match = await this.getMatch(
          "3ab8fda6-81e2-4a18-88a7-214b51f7ae95"
        );
        outcome.match = match;
      }
    }

    res.status(200).json(predictions as PredictionResponse[]);
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
