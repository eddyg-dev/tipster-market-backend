import dotenv from "dotenv";
import { supabaseAdmin } from "../../config/supabase-admin";
import { OddsApiService } from "../odds-api.service";

dotenv.config();

export class UpdateSportsService {
  static async execute() {
    try {
      console.log('🏆 Récupération des sports depuis Odds-API...');
      console.log('🔑 Utilisation de supabaseAdmin (service_role)');

      const sportsResponse = await OddsApiService.getSports();
      console.log(`📊 ${sportsResponse.length} sports récupérés`);

      const { error } = await supabaseAdmin.from("sports").upsert(sportsResponse, {
        onConflict: "key",
      });

      if (error) {
        console.error("❌ Erreur insertion sports:", error);
        throw error;
      }

      console.log(`✅ ${sportsResponse.length} sports traités avec succès`);
      return {
        success: true,
        message: `${sportsResponse.length} sports mis à jour`,
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
