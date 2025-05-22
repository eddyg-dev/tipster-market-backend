import { Request, Response } from "express";
import { supabase } from "../config/supabase";
import { TipsterResponse } from "../data/models/tipster-response.model";

export class TipsterController {
  /**
   * Récupère tous les tipsters
   */
  static async getAllTipsters(req: Request, res: Response): Promise<void> {
    try {
      const { data: tipsters, error } = await supabase
        .from("tipsters")
        .select(
          `
          id,
          username,
          avatar_url,
          win_rate,
          roi,
          rank,
          followers_count,
          tips_count,
          active_tips_count,
          status,
          created_at,
          updated_at
        `
        )
        .order("rank", { ascending: true });

      if (error) {
        console.error("Erreur Supabase:", error);
        res.status(500).json({ error: error.message });
        return;
      }

      res.status(200).json(tipsters as TipsterResponse[]);
    } catch (error) {
      console.error("Erreur serveur:", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }
}
