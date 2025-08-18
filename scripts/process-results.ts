/**
 * Script combiné pour traiter les résultats complets
 *
 * Ce script exécute les deux services en séquence :
 * 1. CheckScoresService : Met à jour les matches avec les scores de l'API
 * 2. UpdateTipsResultsService : Met à jour les tips avec les résultats des matches
 *
 * Utilisation : npm run process-results
 *
 * Note : Ce script est recommandé pour la production car il traite
 * tout le workflow de mise à jour des résultats en une seule commande.
 */
import { CheckScoresService } from "../src/services/jobs/check-scores.service";
import { UpdateTipsResultsService } from "../src/services/jobs/update-tips-results.service";

async function main() {
  console.log("🚀 Démarrage du traitement complet des résultats...");

  try {
    // ========================================
    // ÉTAPE 1 : Mise à jour des scores des matches
    // ========================================
    console.log("📊 Étape 1: Mise à jour des scores des matches...");
    console.log("   → Récupération des scores depuis l'API...");
    console.log("   → Calcul des résultats des matches...");
    console.log("   → Mise à jour des outcomes dans la table matches...");

    const scoresResult = await CheckScoresService.execute();

    if (!scoresResult.success) {
      console.error(
        "❌ Erreur lors de la mise à jour des scores:",
        scoresResult.message
      );
      process.exit(1); // Sort avec un code d'erreur
    }

    console.log("✅ Scores mis à jour:", scoresResult.message);

    // ========================================
    // ÉTAPE 2 : Mise à jour des résultats des tips
    // ========================================
    console.log("🎯 Étape 2: Mise à jour des résultats des tips...");
    console.log("   → Recherche des matches avec des résultats...");
    console.log("   → Identification des tips concernés...");
    console.log("   → Mise à jour des selectedOutcomes dans la table tips...");

    const tipsResult = await UpdateTipsResultsService.execute();

    if (!tipsResult.success) {
      console.error(
        "❌ Erreur lors de la mise à jour des tips:",
        tipsResult.message
      );
      process.exit(1); // Sort avec un code d'erreur
    }

    console.log("✅ Tips mis à jour:", tipsResult.message);
    console.log("🎉 Traitement complet terminé avec succès !");
  } catch (error) {
    console.error("💥 Erreur inattendue:", error);
    process.exit(1); // Sort avec un code d'erreur
  }
}

// Lance le script
main();
