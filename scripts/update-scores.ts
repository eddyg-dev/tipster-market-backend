/**
 * Script pour vérifier et mettre à jour les scores des matches
 *
 * Ce script :
 * 1. Récupère les scores récents depuis l'API externe
 * 2. Filtre les matches qui sont terminés (completed = true)
 * 3. Calcule les résultats des matches (victoire, défaite, match nul)
 * 4. Met à jour les outcomes dans la table matches avec les résultats
 *
 * Utilisation : npm run check-scores
 *
 * Note : Ce script ne met PAS à jour les tips, seulement les matches.
 * Pour mettre à jour les tips, utilisez npm run update-tips-results
 * ou npm run process-results pour tout traiter.
 */
import dotenv from "dotenv";
import { UpdateScoresService } from "../src/services/jobs";

// Charge les variables d'environnement
dotenv.config();

async function main() {
  console.log("🚀 Démarrage de la vérification des scores...");

  try {
    // Exécute le service de vérification des scores
    const result = await UpdateScoresService.execute();

    if (result.success) {
      console.log("✅ Succès:", result.message);
      process.exit(0); // Sort avec succès
    } else {
      console.error("❌ Erreur:", result.message);
      process.exit(1); // Sort avec un code d'erreur
    }
  } catch (error) {
    console.error(
      "💥 Erreur inattendue:",
      error instanceof Error ? error.message : "Erreur inconnue"
    );
    process.exit(1); // Sort avec un code d'erreur
  }
}

// Lance le script
main();
