import { Request, Response } from "express";
import { supabase } from "../config/supabase";

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
            sport_key: match.sport_key || "soccer_france_ligue_one",
            sport_title: MatchController.getSportTitle(match.sport_key),
            commence_time: match.date,
            home_team: match.home_team,
            away_team: match.away_team,
            bookmakers: [
              {
                key: "supabase",
                title: "Supabase",
                last_update: new Date().toISOString(),
                markets: [
                  {
                    key: odds[0].type,
                    title: "Résultat",
                    outcomes: odds.map((odd) => ({
                      name: odd.libelle,
                      price: odd.value,
                      point: null,
                    })),
                  },
                ],
              },
            ],
          };
        })
      );

      res.json(matchesWithOdds);
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
        sport_key: match.sport_key || "soccer_france_ligue_one",
        sport_title: MatchController.getSportTitle(match.sport_key),
        commence_time: match.date,
        home_team: match.home_team,
        away_team: match.away_team,
        bookmakers: [
          {
            key: "supabase",
            title: "Supabase",
            last_update: new Date().toISOString(),
            markets: [
              {
                key: "result",
                title: "Résultat",
                outcomes: odds.map((odd) => ({
                  name: odd.libelle,
                  price: odd.value,
                  point: null,
                })),
              },
            ],
          },
        ],
      });
    } catch (error) {
      console.error("Erreur lors de la récupération du match:", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  }

  /**
   * Convertit la clé sport en titre lisible
   */
  private static getSportTitle(sportKey: string): string {
    const sportTitles: { [key: string]: string } = {
      soccer_france_ligue_one: "Ligue 1",
      soccer_england_premier_league: "Premier League",
      soccer_spain_la_liga: "La Liga",
      soccer_germany_bundesliga: "Bundesliga",
      soccer_italy_serie_a: "Serie A",
      basketball_nba: "NBA",
      basketball_euroleague: "Euroleague",
      americanfootball_nfl: "NFL",
      baseball_mlb: "MLB",
    };

    return sportTitles[sportKey] || "Football";
  }
}
