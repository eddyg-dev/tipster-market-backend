import { config } from "dotenv";
import app from "./app";
import { setupCronJobs } from "./config/cron";

// Charger les variables d'environnement
config();

const PORT = process.env.PORT || 3000;

// Initialiser les tâches cron
setupCronJobs();

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
  console.log(
    `Documentation Swagger disponible à l'adresse: http://localhost:${PORT}/api-docs`
  );
});
