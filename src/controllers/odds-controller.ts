import { OddsApiService } from "../services/odds-api.service";

export class OddsController {
  /**
   * Récupère la liste des sports disponibles
   */
  static async getSports() {
    try {
      return await OddsApiService.getSports();
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
    markets: string = "h2h,spreads"
  ) {
    try {
      return await OddsApiService.getMatches(sportKey, regions, markets);
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
  ) {
    try {
      return await OddsApiService.getMatch(sportKey, matchId, regions, markets);
    } catch (error) {
      console.error("Erreur lors de la récupération des cotes:", error);
      throw error;
    }
  }
}
