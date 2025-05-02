import dotenv from "dotenv";
import { frenchMatchesMock } from "../data/mocks/odds-api/matches.mock";
import { oddsApiSportsMock } from "../data/mocks/odds-api/sports.mock";
import { MatchResponse } from "../data/models/match-response.model";
import { SportResponse } from "../data/models/sport-response.model";

dotenv.config();

const ODDS_API_KEY = process.env.ODDS_API_KEY;
const ODDS_API_BASE_URL = "https://api.the-odds-api.com/v4";

if (!ODDS_API_KEY) {
  throw new Error("ODDS_API_KEY is not defined in environment variables");
}

const sportsKeys = oddsApiSportsMock
  .filter((sport) => sport.group === "Soccer")
  .map((sport) => sport.key)
  .join(",");

export class OddsApiService {
  /**
   * Récupère la liste des sports disponibles
   */
  static async getSports(): Promise<SportResponse[]> {
    try {
      // const response = await fetch(`${ODDS_API_BASE_URL}/sports/`);
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }
      // return await response.json();
      return oddsApiSportsMock;
    } catch (error) {
      console.error("Erreur lors de la récupération des sports:", error);
      throw error;
    }
  }

  /**
   * Récupère les matchs pour un sport spécifique
   * @param sportKey La clé du sport (ex: 'soccer_epl')
   * @param regions Les régions pour les cotes (ex: 'eu')
   * @param markets Les types de marchés (ex: 'h2h')
   */
  static async getMatches(
    sportKey: string = "soccer_france_ligue_one",
    regions: string = "eu",
    markets: string = "h2h"
  ): Promise<MatchResponse[]> {
    try {
      // const url = `${ODDS_API_BASE_URL}/sports/${sportKey}/odds?apiKey=${ODDS_API_KEY}&regions=${regions}&markets=${markets}`;
      // console.log("url", url);
      // const response = await fetch(url);
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }
      // const data = await response.json();
      // console.log("data", data);
      // return data;
      return frenchMatchesMock;
    } catch (error) {
      console.error("Erreur lors de la récupération des matchs:", error);
      throw error;
    }
  }

  /**
   * Récupère les cotes pour un match spécifique
   * @param sportKey La clé du sport
   * @param matchId L'ID du match
   * @param regions Les régions pour les cotes
   * @param markets Les types de marchés
   */
  static async getMatch(
    sportKey: string,
    matchId: string,
    regions: string = "eu",
    markets: string = "h2h"
  ): Promise<MatchResponse> {
    try {
      const url = `${ODDS_API_BASE_URL}/sports/${sportKey}/events/${matchId}/odds?apiKey=${ODDS_API_KEY}&regions=${regions}&markets=${markets}`;
      // const response = await fetch(url);
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }
      // return await response.json();
      return frenchMatchesMock[0];
    } catch (error) {
      console.error("Erreur lors de la récupération des cotes:", error);
      throw error;
    }
  }
}
