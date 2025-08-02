import { Request, Response } from "express";
import { supabase } from "../config/supabase";
import { SportResponse } from "../data/models/sport-response.model";

export class SportController {
  static async getAllSports(req: Request, res: Response) {
    try {
      const { data: sports, error: sportsError } = await supabase
        .from("sports")
        .select("*");
      if (sportsError) throw sportsError;
      const sportsDict = (sports as SportResponse[]).reduce((acc, sport) => {
        acc[sport.key] = sport;
        return acc;
      }, {} as Record<string, SportResponse>);

      res.json(sportsDict);
    } catch (error) {
      console.error("Erreur lors de la récupération des sports:", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  }
}
