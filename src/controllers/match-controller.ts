import { Request, Response } from "express";
import { supabase } from "../config/supabase";
import { MatchUtils } from "../utils/match.utils";

export class MatchController {
  /**
   * Récupère tous les matches depuis Supabase
   */
  static async getAllMatches(req: Request, res: Response) {
    try {
      const { data: matches, error: matchesError } = await supabase
        .from("matches")
        .select("*")
        .order("commence_time", { ascending: true });

      if (matchesError) throw matchesError;

      const matchesWithSportTitle = matches.map((match) => ({
        ...match,
        sport_title: MatchUtils.getSportTitle(match.sport_key),
      }));

      res.json(matchesWithSportTitle);
    } catch (error) {
      console.error("Erreur lors de la récupération des matches:", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  }

  /**
   * Récupère un match spécifique depuis Supabase
   */
  static async getMatchById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const { data: match, error: matchError } = await supabase
        .from("matches")
        .select("*")
        .eq("id", id)
        .single();

      if (matchError) throw matchError;
      res.json(match);
    } catch (error) {
      console.error("Erreur lors de la récupération du match:", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  }
}
