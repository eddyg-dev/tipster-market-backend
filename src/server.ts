import { config } from "dotenv";
import app from "./app";

// Charger les variables d'environnement
config();

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
  console.log(
    `Documentation Swagger disponible à l'adresse: http://localhost:${PORT}/api-docs`
  );
  console.log(
    `Serveur accessible depuis le réseau local sur: http://[VOTRE_IP]:${PORT}`
  );
});
