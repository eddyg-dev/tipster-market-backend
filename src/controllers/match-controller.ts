import { Request, Response } from "express";
import moment from "moment";
import { supabase } from "../config/supabase";

export class MatchController {
  /**
   * Récupère tous les matches depuis Supabase
   */
  static async getAllMatches(req: Request, res: Response) {
    try {
      // Calculer les dates pour la semaine à venir avec Moment
      const now = moment(); // À partir de maintenant
      const endOfDayIn7Days = moment().add(7, "days").endOf("day");
      const { data: matches, error: matchesError } = await supabase
        .from("matches")
        .select("*")
        .gte("commence_time", now.toISOString())
        .lte("commence_time", endOfDayIn7Days.toISOString())
        .order("commence_time", { ascending: true });

      if (matchesError) throw matchesError;
      res.json(matches);
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
