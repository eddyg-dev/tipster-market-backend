import { Outcome, OutcomeType } from "@tipster-market/shared-models";
import { MatchResponse } from "../data/models/match-response.model";

export interface DatabaseMatch {
  match_id: string;
  home_team: string;
  away_team: string;
  commence_time: string;
  sport_key: string;
  outcomes?: any[];
}

export class MatchUtils {
  /**
   * Transforme un MatchResponse de l'API vers le format de la base de données
   */
  static mapApiMatchToDatabase(matchResponse: MatchResponse): DatabaseMatch {
    // Extraire les outcomes des bookmakers
    const outcomes = this.extractOutcomesFromBookmakers(
      matchResponse.bookmakers
    );

    return {
      match_id: matchResponse.id,
      home_team: matchResponse.home_team,
      away_team: matchResponse.away_team,
      commence_time: matchResponse.commence_time,
      sport_key: matchResponse.sport_key,
      outcomes: outcomes,
    };
  }

  /**
   * Transforme un tableau de MatchResponse vers le format de la base de données
   */
  static mapApiMatchesToDatabase(
    matchesResponse: MatchResponse[]
  ): DatabaseMatch[] {
    return matchesResponse.map((matchResponse) =>
      this.mapApiMatchToDatabase(matchResponse)
    );
  }

  /**
   * Transforme un match de la base vers le format API (pour compatibilité)
   */
  static mapDatabaseMatchToApi(match: any): MatchResponse {
    return {
      id: match.match_id || match.id,
      sport_key: match.sport_key,
      sport_title: this.getSportTitle(match.sport_key),
      commence_time: match.commence_time || match.date,
      home_team: match.home_team,
      away_team: match.away_team,
      bookmakers: [
        {
          key: "supabase",
          title: "Supabase",
          last_update: new Date().toISOString(),
          markets: [
            {
              key: "h2h",
              last_update: new Date().toISOString(),
              outcomes: match.outcomes || [],
            },
          ],
        },
      ],
    };
  }

  /**
   * Extrait les outcomes des bookmakers de l'API
   */
  private static extractOutcomesFromBookmakers(bookmakers: any[]): Outcome[] {
    const outcomes: Outcome[] = [];
    console.log(bookmakers);
    const winamax = bookmakers.find(
      (bookmaker) => bookmaker.key === "winamax_fr"
    );
    if (winamax) {
      for (const market of winamax.markets) {
        for (const outcome of market.outcomes) {
          outcomes.push({
            name: outcome.name,
            price: outcome.price,
            type: market.key as OutcomeType,
          });
        }
      }
    }
    return outcomes;
  }

  /**
   * Retourne le titre du sport basé sur la clé
   */
  static getSportTitle(sportKey: string): string {
    const sportTitles: { [key: string]: string } = {
      soccer_france_ligue_one: "Ligue 1",
      soccer_england_premier_league: "Premier League",
      soccer_spain_la_liga: "La Liga",
      soccer_germany_bundesliga: "Bundesliga",
      soccer_italy_serie_a: "Serie A",
    };

    return sportTitles[sportKey] || sportKey;
  }

  /**
   * Valide si un match a des données valides
   */
  static isValidMatch(matchResponse: MatchResponse): boolean {
    return !!(
      matchResponse.id &&
      matchResponse.home_team &&
      matchResponse.away_team &&
      matchResponse.commence_time &&
      matchResponse.bookmakers?.length > 0
    );
  }

  /**
   * Filtre les matchs valides
   */
  static filterValidMatches(matchesResponse: MatchResponse[]): MatchResponse[] {
    return matchesResponse.filter((match) => this.isValidMatch(match));
  }
}
