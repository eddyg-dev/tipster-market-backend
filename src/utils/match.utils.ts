import { OutcomeResult } from "../shared-data/enums/outcome-result.enum";
import { OutcomeType } from "../shared-data/enums/outcome-type.enum";
import { MatchResponse } from "../shared-data/models/odds-api-response/match-response.model";
import { Outcome } from "../shared-data/models/outcome.model";

export interface DatabaseMatch {
  match_id: string;
  home_team: string;
  away_team: string;
  commence_time: string;
  sport_key: string;
  outcomes?: any[];
  scores?: {
    scores: {
      name: string;
      score: string;
    }[];
    outcome_results?: {
      outcome_id: string;
      type: string;
      name: string;
      result: "right" | "wrong" | "initial";
    }[];
  };
}

export class MatchUtils {
  /**
   * Transforme un MatchResponse de l'API vers le format de la base de données
   */
  static mapApiMatchToDatabase(matchResponse: MatchResponse): DatabaseMatch {
    // Extraire les outcomes des bookmakers avec les noms des équipes pour le tri
    let outcomes = this.extractOutcomesFromBookmakers(
      matchResponse.bookmakers,
      matchResponse.home_team,
      matchResponse.away_team
    );
    outcomes = outcomes.filter((outcome) => {
      return process.env.OUTCOME_TYPES?.split(",").includes(outcome.type);
    });

    return {
      match_id: matchResponse.id,
      home_team: matchResponse.home_team,
      away_team: matchResponse.away_team,
      commence_time: matchResponse.commence_time,
      sport_key: matchResponse.sport_key,
      outcomes,
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
      commence_time: match.commence_time || match.date,
      home_team: match.home_team,
      away_team: match.away_team,
      sport: { ...match.sport, title: this.getSportTitle(match.sport_key) },
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
  private static extractOutcomesFromBookmakers(
    bookmakers: any[],
    homeTeam?: string,
    awayTeam?: string
  ): Outcome[] {
    const outcomes: Outcome[] = [];
    const bookmarkerChoice = process.env.BOOKMARKER;
    let bookmarker = bookmakers.find(
      (bookmaker) => bookmarkerChoice === bookmaker.key
    );
    bookmarker = bookmarker ?? bookmakers[0];
    if (bookmarker) {
      for (const market of bookmarker.markets) {
        for (const outcome of market.outcomes) {
          outcomes.push({
            name: outcome.name,
            price: outcome.price,
            type: market.key as OutcomeType,
            result: OutcomeResult.Initial,
          });
        }
      }
    }

    // Trier les outcomes pour placer "Draw" en deuxième position
    return this.sortOutcomesWithDrawSecond(outcomes, homeTeam, awayTeam);
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
      soccer_italy_serie_b: "Serie B",
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

  /**
   * Trie les outcomes dans l'ordre : home team (1er), draw (2ème), away team (3ème)
   */
  private static sortOutcomesWithDrawSecond(
    outcomes: Outcome[],
    homeTeam?: string,
    awayTeam?: string
  ): Outcome[] {
    if (outcomes.length <= 2) {
      return outcomes;
    }

    // Trouver les outcomes par correspondance avec les noms des équipes
    const drawOutcome = outcomes.find((outcome) => outcome.name === "Draw");

    // Trouver l'outcome de l'équipe à domicile
    const homeOutcome = homeTeam
      ? outcomes.find(
          (outcome) =>
            outcome.name !== "Draw" && outcome.name.includes(homeTeam)
        )
      : null;

    // Trouver l'outcome de l'équipe à l'extérieur
    const awayOutcome = awayTeam
      ? outcomes.find(
          (outcome) =>
            outcome.name !== "Draw" &&
            outcome.name !== homeOutcome?.name &&
            outcome.name.includes(awayTeam)
        )
      : null;

    // Si on ne peut pas identifier clairement home/away, utiliser l'ordre original mais avec Draw en 2ème
    if (!homeOutcome || !awayOutcome) {
      const otherOutcomes = outcomes.filter(
        (outcome) => outcome.name !== "Draw"
      );
      if (drawOutcome && otherOutcomes.length >= 1) {
        return [otherOutcomes[0], drawOutcome, ...otherOutcomes.slice(1)];
      }
      return outcomes;
    }

    // Ordre spécifique : home team, draw, away team
    const sortedOutcomes = [];
    if (homeOutcome) sortedOutcomes.push(homeOutcome);
    if (drawOutcome) sortedOutcomes.push(drawOutcome);
    if (awayOutcome) sortedOutcomes.push(awayOutcome);

    // Ajouter les autres outcomes non identifiés à la fin
    const remainingOutcomes = outcomes.filter(
      (outcome) =>
        outcome !== homeOutcome &&
        outcome !== drawOutcome &&
        outcome !== awayOutcome
    );

    return [...sortedOutcomes, ...remainingOutcomes];
  }
}
