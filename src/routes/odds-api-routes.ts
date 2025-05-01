import express, { RequestHandler } from "express";
import { OddsController } from "../controllers/odds-controller";

const router = express.Router();

/**
 * @swagger
 * /api/odds/sports:
 *   get:
 *     tags: [Odds]
 *     summary: Récupère la liste des sports disponibles
 */
router.get("/sports", (async (req, res) => {
  try {
    const sports = await OddsController.getSports();
    res.json(sports);
  } catch (error) {
    console.error("Erreur lors de la récupération des sports:", error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des sports" });
  }
}) as RequestHandler);

/**
 * @swagger
 * /api/odds/matches:
 *   get:
 *     tags: [Odds]
 *     summary: Récupère les matches pour un sport spécifique
 *     parameters:
 *       - in: query
 *         name: sportKey
 *         schema:
 *           type: string
 *         description: "Clé du sport (défaut: soccer_france_ligue_one)"
 *       - in: query
 *         name: regions
 *         schema:
 *           type: string
 *         description: "Régions pour les cotes (défaut: eu)"
 *       - in: query
 *         name: markets
 *         schema:
 *           type: string
 *         description: "Types de marchés (défaut: h2h,spreads)"
 */
router.get("/matches", (async (req, res) => {
  const { sportKey, regions, markets } = req.query;

  try {
    const matches = await OddsController.getMatches(
      (sportKey as string) || "soccer_france_ligue_one",
      (regions as string) || "eu",
      (markets as string) || "h2h,spreads"
    );
    res.json({ matches });
  } catch (error) {
    console.error("Erreur lors de la récupération des matches:", error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des matches" });
  }
}) as RequestHandler);

/**
 * @swagger
 * /api/odds/matches/{matchId}:
 *   get:
 *     tags: [Odds]
 *     summary: Récupère les cotes pour un match spécifique
 *     parameters:
 *       - in: path
 *         name: matchId
 *         required: true
 *         schema:
 *           type: string
 *         description: "ID du match"
 *       - in: query
 *         name: sportKey
 *         schema:
 *           type: string
 *         description: "Clé du sport (défaut: soccer_france_ligue_one)"
 *       - in: query
 *         name: regions
 *         schema:
 *           type: string
 *         description: "Régions pour les cotes (défaut: eu)"
 *       - in: query
 *         name: markets
 *         schema:
 *           type: string
 *         description: "Types de marchés (défaut: h2h)"
 */
router.get("/matches/:matchId", (async (req, res) => {
  const { matchId } = req.params;
  const { sportKey, regions, markets } = req.query;

  try {
    const odds = await OddsController.getMatch(
      (sportKey as string) || "soccer_france_ligue_one",
      matchId,
      (regions as string) || "eu",
      (markets as string) || "h2h"
    );
    res.json(odds);
  } catch (error) {
    console.error("Erreur lors de la récupération des cotes:", error);
    res.status(500).json({ error: "Erreur lors de la récupération des cotes" });
  }
}) as RequestHandler);

export default router;
