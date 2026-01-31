import { supabaseAdmin } from "../../config/supabase-admin";
import { Market } from "../../shared-data/enums/market.enum";
import { Region } from "../../shared-data/enums/region.enum";
import { MatchUtils } from "../../utils/match.utils";
import { OddsApiService } from "../odds-api.service";

export class UpdateOddsService {
  static async execute() {
    const startTime = Date.now();
    try {
      const sports = process.env.SPORTS_KEYS?.split(",") || [];
      if (sports.length === 0) {
        return {
          success: false,
          message: "Aucun sport défini",
        };
      }

      console.log(
        `🚀 Début de la mise à jour des cotes pour ${sports.length} sports...`
      );

      const matchesResponse = await OddsApiService.getMatchesWithOdds(
        sports,
        [Region.EU],
        [Market.H2H]
      );

      console.log(matchesResponse);

      const apiTime = Date.now() - startTime;
      console.log(`⏱️  Temps API: ${apiTime}ms`);

      const validMatches = MatchUtils.filterValidMatches(matchesResponse);
      const matches = MatchUtils.mapApiMatchesToDatabase(validMatches);

      console.log(`📊 ${matches.length} matches valides trouvés`);

      // Insérer les matchs en lot pour de meilleures performances
      if (matches.length > 0) {
        const dbStartTime = Date.now();

        // Insérer ou mettre à jour les matchs
        const { error: upsertError } = await supabaseAdmin
          .from("matches")
          .upsert(matches, {
            onConflict: "match_id",
            ignoreDuplicates: false,
          });

        if (upsertError) {
          console.error(
            "Erreur lors de l'insertion/mise à jour des matchs:",
            upsertError
          );
        } else {
          console.log(
            `${matches.length} matchs insérés/mis à jour avec succès`
          );
        }

        const dbTime = Date.now() - dbStartTime;
        console.log(`💾 Temps DB: ${dbTime}ms`);
      }

      const totalTime = Date.now() - startTime;
      console.log(`✅ Total: ${totalTime}ms`);

      return {
        success: true,
        message: `${matches.length} matchs mis à jour en ${totalTime}ms`,
      };
    } catch (error) {
      console.error("Erreur générale:", error);
      return {
        success: false,
        message: error instanceof Error ? error.message : "Erreur",
      };
    }
  }
}
