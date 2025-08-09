import dotenv from "dotenv";
import { supabase } from "../../config/supabase";
import { SportUtils } from "../../utils/sport.utils";
import { OddsApiService } from "../odds-api.service";

dotenv.config();

export class UpdateSportsService {
  static async execute() {
    try {
      const sportsResponse = await OddsApiService.getSports();
      const sports = SportUtils.filterValidSports(sportsResponse);

      const { data, error } = await supabase.from("sports").upsert(sports, {
        onConflict: "key",
      });

      if (error) {
        console.error("Erreur insertion sports:", error);
      } else {
        console.log(`${sports.length} sports traités avec succès`);
      }
      return {
        success: true,
        message: `${sports.length} sports mis à jour`,
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
