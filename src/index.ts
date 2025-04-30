import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'API Tipster Market" });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
