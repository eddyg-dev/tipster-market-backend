import { Request, Response } from "express";
import { supabase } from "../config/supabase";
import { PredictionResponse } from "../data/models/prediction-response.model";

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

  static async getPredictions(req: Request, res: Response): Promise<void> {
    // Récupérer toutes les prédictions
    const { data: predictions, error: predictionsError } = await supabase
      .from("predictions")
      .select("*");

    if (predictionsError) {
      console.error("Erreur Supabase:", predictionsError);
      res.status(500).json({ error: predictionsError.message });
      return;
    }

    // Extraire tous les match_ids uniques des selected_outcomes
    const matchIds = predictions.reduce((ids: string[], prediction) => {
      const outcomes = prediction.selected_outcomes as { matchId: string }[];
      return [...ids, ...outcomes.map((outcome) => outcome.matchId)];
    }, []);

    // Récupérer les détails des matches
    const { data: matches, error: matchesError } = await supabase
      .from("matches")
      .select("*")
      .in("id", matchIds);

    if (matchesError) {
      console.error("Erreur Supabase:", matchesError);
      res.status(500).json({ error: matchesError.message });
      return;
    }

    res.status(200).json(predictions as PredictionResponse[]);
  }
}
