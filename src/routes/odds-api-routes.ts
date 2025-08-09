import express, { RequestHandler } from "express";
import { OddsController } from "../controllers/odds-controller";
import { Market } from "../shared-data/enums/market.enum";
import { Region } from "../shared-data/enums/region.enum";

const router = express.Router();

router.get("/sports", (async (req, res) => {
  try {
    const sports = await OddsController.getAllSports();
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
      sportKey as string[],
      regions as Region[],
      markets as Market[]
    );
    res.json({ matches });
  } catch (error) {
    console.error("Erreur lors de la récupération des matches:", error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des matches" });
  }
}) as RequestHandler);

export default router;
