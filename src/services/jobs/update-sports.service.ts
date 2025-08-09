import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import { SportUtils } from "../../utils/sport.utils";
import { OddsApiService } from "../odds-api.service";

dotenv.config();

export class UpdateSportsService {
  static async execute() {
    try {
      const sportsResponse = await OddsApiService.getSports();
      const sports = SportUtils.filterValidSports(sportsResponse);
      const supabase = createClient(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_ANON_KEY!
      );
      await supabase
        .from("sports")
        .upsert(sports, { onConflict: "key", ignoreDuplicates: true });
      return { success: true, message: `${sports.length} sports mis à jour` };
    } catch (error) {
      console.error("Erreur générale:", error);
      return {
        success: false,
        message: error instanceof Error ? error.message : "Erreur",
      };
    }
  }
}
