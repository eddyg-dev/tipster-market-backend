import { config } from "dotenv";
import app from "./app";

// Charger les variables d'environnement
config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
  console.log(
    `Documentation Swagger disponible à l'adresse: http://localhost:${PORT}/api-docs`
  );
});
