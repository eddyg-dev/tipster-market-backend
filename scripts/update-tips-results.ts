/**
 * Script pour mettre à jour les résultats des tips
 *
 * Ce script :
 * 1. Récupère tous les matches qui ont des outcomes avec des résultats
 * 2. Trouve tous les tips qui utilisent ces matches
 * 3. Met à jour la propriété selectedOutcomes des tips avec les nouveaux résultats
 *
 * Utilisation : npm run update-tips-results
 */
import { UpdateTipsResultsService } from "../src/services/jobs/update-tips-results.service";

async function main() {
  console.log("🚀 Démarrage de la mise à jour des résultats des tips...");

  try {
    // Exécute le service qui met à jour les tips
    const result = await UpdateTipsResultsService.execute();

    // Vérifie le résultat et affiche le message approprié
    if (result.success) {
      console.log("✅ Succès:", result.message);
    } else {
      console.error("❌ Erreur:", result.message);
      process.exit(1); // Sort avec un code d'erreur
    }
  } catch (error) {
    console.error("💥 Erreur inattendue:", error);
    process.exit(1); // Sort avec un code d'erreur
  }
}

// Lance le script
main();
