import dotenv from "dotenv";
import { supabase } from "../config/supabase";
import { Market } from "../shared-data/enums/market.enum";
import { Region } from "../shared-data/enums/region.enum";
import { MatchResponse } from "../shared-data/models/odds-api-response/match-response.model";
import { ScoreResponse } from "../shared-data/models/odds-api-response/score-response.model";
import { SportResponse } from "../shared-data/models/odds-api-response/sport-response.model";

dotenv.config();

const ODDS_API_KEY = process.env.ODDS_API_KEY;
const ODDS_API_BASE_URL = "https://api.the-odds-api.com/v4";

if (!ODDS_API_KEY) {
  throw new Error("ODDS_API_KEY is not defined in environment variables");
}

export class OddsApiService {
  /**
   * Récupère la liste des sports disponibles
   */
  static async getSports(): Promise<SportResponse[]> {
    try {
      const response = await fetch(
        `${ODDS_API_BASE_URL}/sports?apiKey=${ODDS_API_KEY}`
      );
      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  /**
   * Récupère les matchs pour un sport spécifique
   * @param sportKey La clé du sport (ex: 'soccer_epl')
   * @param regions Les régions pour les cotes (ex: 'eu')
   * @param markets Les types de marchés (ex: 'h2h')
   */
  static async getMatchesWithOdds(
    sportKeys: string[],
    regions: Region[],
    markets: Market[]
  ): Promise<MatchResponse[]> {
    try {
      const regionsString = regions.join(",");
      const marketsString = markets.join(",");
      const allMatches: MatchResponse[] = [];

      // Faire des appels parallèles pour tous les sports (avec limitation de taux)
      const promises = sportKeys.map(async (sportKey, index) => {
        // Ajouter un délai progressif pour éviter de surcharger l'API
        if (index > 0) {
          await new Promise((resolve) => setTimeout(resolve, 100 * index));
        }
        try {
          const url = `${ODDS_API_BASE_URL}/sports/${sportKey}/odds?apiKey=${ODDS_API_KEY}&regions=${regionsString}&markets=${marketsString}`;
          console.log(`Récupération des matches pour ${sportKey}...`);

          const response = await fetch(url);
          if (!response.ok) {
            console.error(`Erreur pour ${sportKey}: HTTP ${response.status}`);
            return []; // Retourner un tableau vide en cas d'erreur
          }

          const matches = await response.json();
          console.log(`${matches.length} matches trouvés pour ${sportKey}`);
          return matches;
        } catch (error) {
          console.error(
            `Erreur lors de la récupération pour ${sportKey}:`,
            error
          );
          return []; // Retourner un tableau vide en cas d'erreur
        }
      });

      // Attendre tous les appels en parallèle
      const results = await Promise.all(promises);

      // Combiner tous les résultats
      results.forEach((matches) => {
        allMatches.push(...matches);
      });

      return allMatches;
    } catch (error) {
      throw error;
    }
  }

  static async getScores(): Promise<ScoreResponse[]> {
    const sportKeys = process.env.SPORTS_KEYS?.split(",");
    if (!sportKeys) {
      throw new Error("SPORTS_KEYS is not defined in environment variables");
    }
    console.log("Sports à traiter:", sportKeys);
    const { data: sports, error: sportsError } = await supabase
      .from("sports")
      .select("*")
      .in("key", sportKeys);
    if (sportsError) {
      throw sportsError;
    }
    const scores = [];
    for (const sportKey of sportKeys) {
      const url = `${ODDS_API_BASE_URL}/sports/${sportKey}/scores?apiKey=${ODDS_API_KEY}&dateFormat=iso&daysFrom=3`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      scores.push(await response.json());
    }
    return scores;
  }
}
