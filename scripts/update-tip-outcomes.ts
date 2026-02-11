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
  try {
    await TipOutcomeUpdateService.updateAllPendingTips();
    process.exit(0);
  } catch (error) {
    process.exit(1);
  }
}

main();


