/**
 * Script de debug pour vérifier la mise à jour des scores et des résultats d'outcomes
 */
import dotenv from "dotenv";
import { supabase } from "../src/config/supabase";

// Charge les variables d'environnement
dotenv.config();

async function debugScores() {
  console.log("🔍 Début du debug des scores...");

  try {
    // 1. Vérifier les matches avec des scores
    console.log("\n📊 Matches avec des scores:");
    const { data: matchesWithScores, error: matchesError } = await supabase
      .from("matches")
      .select("id, match_id, home_team, away_team, scores, outcomes")
      .not("scores", "is", null)
      .limit(5);

    if (matchesError) {
      console.error(
        "❌ Erreur lors de la récupération des matches:",
        matchesError
      );
      return;
    }

    console.log(
      `✅ ${matchesWithScores.length} matches trouvés avec des scores`
    );

    matchesWithScores.forEach((match, index) => {
      console.log(`\n--- Match ${index + 1} ---`);
      console.log(`ID: ${match.id}`);
      console.log(`Match ID: ${match.match_id}`);
      console.log(`Équipes: ${match.home_team} vs ${match.away_team}`);
      console.log(`Scores:`, JSON.stringify(match.scores, null, 2));

      if (match.scores?.outcome_results) {
        console.log(
          `Résultats des outcomes:`,
          JSON.stringify(match.scores.outcome_results, null, 2)
        );
      } else {
        console.log("⚠️  Aucun résultat d'outcome trouvé");
      }
    });

    // 2. Vérifier les tips avec des outcomes sélectionnés
    console.log("\n🎯 Tips avec des outcomes sélectionnés:");
    const { data: tips, error: tipsError } = await supabase
      .from("tips")
      .select("id, selected_outcomes")
      .limit(3);

    if (tipsError) {
      console.error("❌ Erreur lors de la récupération des tips:", tipsError);
      return;
    }

    console.log(`✅ ${tips.length} tips trouvés`);

    tips.forEach((tip, index) => {
      console.log(`\n--- Tip ${index + 1} ---`);
      console.log(`ID: ${tip.id}`);
      console.log(
        `Outcomes sélectionnés:`,
        JSON.stringify(tip.selected_outcomes, null, 2)
      );
    });

    // 3. Vérifier la correspondance entre les outcomes des tips et les matches
    console.log("\n🔗 Vérification de la correspondance:");
    for (const tip of tips) {
      if (tip.selected_outcomes && Array.isArray(tip.selected_outcomes)) {
        for (const outcome of tip.selected_outcomes) {
          const matchId = outcome.match?.match_id || outcome.match?.id;
          if (matchId) {
            const match = matchesWithScores.find(
              (m) => m.match_id === matchId || m.id === matchId
            );
            if (match) {
              console.log(
                `✅ Correspondance trouvée pour outcome "${outcome.name}" dans match ${matchId}`
              );
              if (match.scores?.outcome_results) {
                const result = match.scores.outcome_results.find(
                  (or: any) =>
                    or.name === outcome.name && or.type === outcome.type
                );
                if (result) {
                  console.log(`   Résultat: ${result.result}`);
                } else {
                  console.log(`   ⚠️  Aucun résultat trouvé pour cet outcome`);
                }
              }
            } else {
              console.log(
                `❌ Aucun match trouvé pour outcome "${outcome.name}" (match_id: ${matchId})`
              );
            }
          }
        }
      }
    }
  } catch (error) {
    console.error("💥 Erreur inattendue:", error);
  }
}

// Lance le script
debugScores();
