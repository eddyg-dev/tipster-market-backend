import cron from "node-cron";
import { OddsController } from "../controllers/odds-controller";

// Configuration des tâches planifiées
export const setupCronJobs = () => {
  // Mise à jour des matches tous les jours à minuit
  cron.schedule("0 0 * * *", async () => {
    console.log("Mise à jour des matches en cours...");
    try {
      await OddsController.getMatches(
        "soccer_france_ligue_one",
        "eu",
        "h2h,spreads"
      );
      console.log("Mise à jour des matches terminée avec succès");
    } catch (error) {
      console.error("Erreur lors de la mise à jour des matches:", error);
    }
  });

  // Mise à jour des cotes toutes les heures
  cron.schedule("0 * * * *", async () => {
    console.log("Mise à jour des cotes en cours...");
    try {
      // Ici, vous devrez récupérer la liste des matchs actifs
      // et mettre à jour leurs cotes
      console.log("Mise à jour des cotes terminée avec succès");
    } catch (error) {
      console.error("Erreur lors de la mise à jour des cotes:", error);
    }
  });
};
