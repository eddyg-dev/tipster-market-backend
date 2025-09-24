/**
 * Script pour tester le calcul de la cote moyenne des tips gagnants
 */
import dotenv from "dotenv";
import { supabase } from "../src/config/supabase";
import { StatsService } from "../src/services/stats.service";

// Charge les variables d'environnement
dotenv.config();

async function testOddAverage() {
  console.log("🧪 Test du calcul de la cote moyenne des tips gagnants...");

  try {
    // Récupérer tous les tipsters
    const { data: tipsters, error: tipstersError } = await supabase
      .from("profiles")
      .select("id, username")
      .eq("profile_type", "tipster");

    if (tipstersError) {
      console.error(
        "❌ Erreur lors de la récupération des tipsters:",
        tipstersError
      );
      return;
    }

    if (!tipsters || tipsters.length === 0) {
      console.log("ℹ️  Aucun tipster trouvé");
      return;
    }

    console.log(`📊 ${tipsters.length} tipsters trouvés`);

    // Tester le calcul pour chaque tipster
    for (const tipster of tipsters) {
      console.log(`\n--- Tipster: ${tipster.username} ---`);

      try {
        const stats = await StatsService.calculateTipsterStats(tipster.id);

        console.log(`✅ Statistiques calculées:`);
        console.log(`   - Win Rate: ${stats.win_rate}%`);
        console.log(`   - ROI: ${stats.roi}%`);
        console.log(`   - Tips terminés: ${stats.tips_count}`);
        console.log(`   - Cote moyenne (tips gagnants): ${stats.odd_average}`);
        console.log(`   - Points: ${stats.points}`);

        // Vérifier manuellement les tips gagnants pour validation
        const { data: tips, error: tipsError } = await supabase
          .from("tips")
          .select("price, selected_outcomes")
          .eq("tipster_id", tipster.id);

        if (tipsError) {
          console.error(
            `❌ Erreur lors de la récupération des tips:`,
            tipsError
          );
          continue;
        }

        // Filtrer les tips terminés et gagnants
        const completedTips = tips.filter((tip) => {
          return tip.selected_outcomes.every(
            (outcome: any) => outcome.result !== "initial"
          );
        });

        const winningTips = completedTips.filter((tip) => {
          return tip.selected_outcomes.every(
            (outcome: any) => outcome.result === "right"
          );
        });

        if (winningTips.length > 0) {
          const manualAverage =
            winningTips.reduce((sum, tip) => sum + tip.price, 0) /
            winningTips.length;
          console.log(
            `   - Vérification manuelle: ${manualAverage.toFixed(2)} (${
              winningTips.length
            } tips gagnants)`
          );
        } else {
          console.log(`   - Aucun tip gagnant trouvé`);
        }
      } catch (error) {
        console.error(`❌ Erreur pour le tipster ${tipster.username}:`, error);
      }
    }
  } catch (error) {
    console.error("💥 Erreur inattendue:", error);
  }
}

// Lance le script
testOddAverage();


