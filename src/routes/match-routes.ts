import express from "express";
import { MatchController } from "../controllers/match-controller";

const router = express.Router();

router.get("/", MatchController.getAllMatches);

router.get("/:id", MatchController.getMatchById);

export default router;
