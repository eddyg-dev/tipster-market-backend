import { Request, Response } from "express";
import { supabase } from "../config/supabase";
import {
  englishMatchesMock,
  frenchMatchesMock,
} from "../data/mocks/odds-api/matches.mock";

export class MatchController {
  /**
   * Récupère tous les matches avec leurs cotes depuis Supabase
   */
  static async getAllMatches(req: Request, res: Response) {
    try {
      const { data: matches, error: matchesError } = await supabase
        .from("matches")
        .select("*")
        .order("date", { ascending: true });

      if (matchesError) throw matchesError;

      // Pour chaque match, récupérer ses cotes
      const matchesWithOdds = await Promise.all(
        matches.map(async (match) => {
          const { data: odds, error: oddsError } = await supabase
            .from("odds")
            .select("*")
            .eq("match_id", match.id);

          if (oddsError) throw oddsError;

          return {
            id: match.id,
            homeTeam: match.home_team,
            awayTeam: match.away_team,
            date: match.date,
            odds: {
              result: odds.map((odd) => ({
                id: odd.id,
                libelle: odd.libelle,
                value: odd.value,
                type: odd.type,
                selected: odd.selected,
              })),
            },
          };
        })
      );

      res.json(frenchMatchesMock.concat(englishMatchesMock));
    } catch (error) {
      console.error("Erreur lors de la récupération des matches:", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  }

  /**
   * Récupère un match spécifique avec ses cotes depuis Supabase
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

      const { data: odds, error: oddsError } = await supabase
        .from("odds")
        .select("*")
        .eq("match_id", id);

      if (oddsError) throw oddsError;

      res.json({
        id: match.id,
        homeTeam: match.home_team,
        awayTeam: match.away_team,
        date: match.date,
        odds: {
          result: odds.map((odd) => ({
            id: odd.id,
            libelle: odd.libelle,
            value: odd.value,
            type: odd.type,
            selected: odd.selected,
          })),
        },
      });
    } catch (error) {
      console.error("Erreur lors de la récupération du match:", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  }
}
