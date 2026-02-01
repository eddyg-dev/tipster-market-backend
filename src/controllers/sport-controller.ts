import { Request, Response } from "express";
import { supabaseAdmin } from "../config/supabase-admin";
import { SportResponse } from "../shared-data/models/odds-api-response/sport-response.model";

export class SportController {
  static async getAllSports(req: Request, res: Response) {
    try {
      const { data: sports, error: sportsError } = await supabaseAdmin
        .from("sports")
        .select("*")
        .order("priority", { ascending: false });
      if (sportsError) throw sportsError;
      const sportsDict = (sports as SportResponse[]).reduce((acc, sport) => {
        acc[sport.key] = {
          ...sport,
        };
        return acc;
      }, {} as Record<string, SportResponse>);

      res.json(sportsDict);
    } catch (error) {
      console.error("Erreur lors de la récupération des sports:", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  }

  static async getSportById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { data: sport, error: sportError } = await supabaseAdmin
        .from("sports")
        .select("*")
        .eq("key", id)
        .single();
      if (sportError) throw sportError;
      res.json(sport);
    } catch (error) {
      console.error("Erreur lors de la récupération du sport:", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  }
}
