import { supabase } from "../../config/supabase";
import { Market } from "../../shared-data/enums/market.enum";
import { Region } from "../../shared-data/enums/region.enum";
import { MatchUtils } from "../../utils/match.utils";
import { OddsApiService } from "../odds-api.service";

export class UpdateOddsService {
  static async execute() {
    const startTime = Date.now();
    try {
      const sports = process.env.SPORTS?.split(",") || [];
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

        // Mettre à jour uniquement les scores pour les matchs existants
        const matchesWithScores = matches.filter((match) => match.scores);

        if (matchesWithScores.length > 0) {
          let updatedCount = 0;

          for (const match of matchesWithScores) {
            const { error: updateError } = await supabase
              .from("matches")
              .update({ scores: match.scores })
              .eq("match_id", match.match_id);

            if (updateError) {
              console.error(
                `Erreur mise à jour scores pour ${match.match_id}:`,
                updateError
              );
            } else {
              updatedCount++;
            }
          }

          const dbTime = Date.now() - dbStartTime;
          console.log(`💾 Temps DB: ${dbTime}ms`);
          console.log(`${updatedCount} scores mis à jour avec succès`);
        } else {
          console.log("Aucun score à mettre à jour");
        }
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
