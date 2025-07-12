import express, { RequestHandler } from "express";
import { OddsController } from "../controllers/odds-controller";

const router = express.Router();

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
