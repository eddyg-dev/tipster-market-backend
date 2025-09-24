/**
 * Script pour vérifier si le trigger PostgreSQL est installé
 */
import dotenv from "dotenv";
import { supabase } from "../src/config/supabase";

// Charge les variables d'environnement
dotenv.config();

async function checkTrigger() {
  console.log("🔍 Vérification du trigger PostgreSQL...");

  try {
    // Test direct du trigger en essayant de mettre à jour un match
    console.log("🧪 Test direct du trigger...");

    // Récupérer un match existant
    const { data: testMatch, error: testMatchError } = await supabase
      .from("matches")
      .select("id, match_id, scores")
      .not("scores", "is", null)
      .limit(1)
      .single();

    if (testMatchError || !testMatch) {
      console.log("⚠️  Aucun match avec des scores trouvé pour le test");
      return;
    }

    console.log(`📝 Match de test: ${testMatch.match_id}`);
    console.log(`Scores actuels:`, JSON.stringify(testMatch.scores, null, 2));

    // Essayer une mise à jour mineure pour déclencher le trigger
    const { data: updateResult, error: updateError } = await supabase
      .from("matches")
      .update({ scores: testMatch.scores }) // Même valeur pour déclencher le trigger
      .eq("id", testMatch.id)
      .select("scores");

    if (updateError) {
      console.error("❌ Erreur lors du test de mise à jour:", updateError);
      return;
    }

    console.log("✅ Mise à jour réussie");
    console.log(
      "Scores après mise à jour:",
      JSON.stringify(updateResult[0]?.scores, null, 2)
    );

    // Vérifier si les outcome_results ont été ajoutés
    if (updateResult[0]?.scores?.outcome_results) {
      console.log(
        "✅ Le trigger fonctionne ! Les outcome_results ont été calculés"
      );
    } else {
      console.log(
        "⚠️  Le trigger ne semble pas fonctionner ou il n'y a pas d'outcomes à traiter"
      );
    }
  } catch (error) {
    console.error("💥 Erreur inattendue:", error);
  }
}

// Lance le script
checkTrigger();
