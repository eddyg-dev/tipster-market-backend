import { Market, Region } from "@eddyg-dev/shared-models";
import { OddsApiService } from "../services/odds-api.service";

export class OddsController {
  /**
   * Récupère la liste des sports disponibles
   */
  static async getAllSports() {
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
    sportKey: string[],
    regions: Region[],
    markets: Market[]
  ) {
    try {
      return await OddsApiService.getMatchesWithOdds(
        sportKey,
        regions,
        markets
      );
    } catch (error) {
      console.error("Erreur lors de la récupération des matchs:", error);
      throw error;
    }
  }
}
