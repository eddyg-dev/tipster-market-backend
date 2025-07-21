import { supabase } from "../../config/supabase";
import { MatchUtils } from "../../utils/match.utils";
import { OddsApiService } from "../odds-api.service";

export class UpdateOddsService {
  static async execute() {
    try {
      const matchesResponse = await OddsApiService.getMatches();
      const validMatches = MatchUtils.filterValidMatches(matchesResponse);
      const matches = MatchUtils.mapApiMatchesToDatabase(validMatches);
      // Insérer les matchs
      for (const match of matches) {
        const { data, error } = await supabase
          .from("matches")
          .upsert(match, { onConflict: "match_id", ignoreDuplicates: true });

        if (error) {
          console.error("Erreur insertion match:", error);
        } else {
          console.log("Match inséré avec succès");
        }
      }

      return { success: true, message: `${matches.length} matchs mis à jour` };
    } catch (error) {
      console.error("Erreur générale:", error);
      return {
        success: false,
        message: error instanceof Error ? error.message : "Erreur",
      };
    }
  }
}
