import { Request, Response } from "express";
import moment from "moment";
import { supabase } from "../config/supabase";

/**
 * Contrôleur pour la gestion des matches
 * Optimisé avec des JOINs Supabase pour éviter les requêtes N+1
 * Utilise la clé étrangère fk_matches_sport_key définie dans init.sql
 */

export class MatchController {
  /**
   * Récupère tous les matches depuis Supabase avec leurs sports associés
   * Utilise un JOIN optimisé pour éviter les requêtes N+1
   */
  static async getAllMatches(req: Request, res: Response) {
    try {
      // Calculer les dates pour la semaine à venir avec Moment
      const now = moment(); // À partir de maintenant
      const endOfDayIn7Days = moment().add(7, "days").endOf("day");

      // Requête optimisée avec JOIN pour récupérer les matches et leurs sports en une seule requête
      // Utilise la clé étrangère fk_matches_sport_key définie dans init.sql
      const { data: matches, error: matchesError } = await supabase
        .from("matches")
        .select(
          `
          *,
          sport:sports!sport_key(*)
        `
        )
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
   * Récupère un match spécifique depuis Supabase avec son sport associé
   */
  static async getMatchById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      // Requête optimisée avec JOIN pour récupérer le match et son sport en une seule requête
      // Utilise la clé étrangère fk_matches_sport_key définie dans init.sql
      const { data: match, error: matchError } = await supabase
        .from("matches")
        .select(
          `
          *,
          sport:sports!sport_key(*)
        `
        )
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
