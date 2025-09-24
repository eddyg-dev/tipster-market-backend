/**
 * Script pour mettre à jour manuellement les outcomes des tips
 *
 * Ce script :
 * 1. Trouve tous les tips avec des outcomes non mis à jour (result = "initial")
 * 2. Met à jour leurs outcomes en fonction des résultats des matches
 *
 * Utilisation : npm run update-tip-outcomes
 */
import dotenv from "dotenv";
import { TipOutcomeUpdateService } from "../src/services/tip-outcome-update.service";

// Charge les variables d'environnement
dotenv.config();

async function main() {
  console.log("🚀 Démarrage de la mise à jour des outcomes des tips...");

  try {
    // Mettre à jour tous les tips en attente
    await TipOutcomeUpdateService.updateAllPendingTips();

    console.log("✅ Mise à jour des outcomes des tips terminée avec succès");
    process.exit(0);
  } catch (error) {
    console.error(
      "❌ Erreur lors de la mise à jour des outcomes des tips:",
      error instanceof Error ? error.message : "Erreur inconnue"
    );
    process.exit(1);
  }
}

// Lance le script
main();


