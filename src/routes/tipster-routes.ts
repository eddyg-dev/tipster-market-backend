import express from "express";
import { TipsterController } from "../controllers/tipster-controller";

const router = express.Router();

/**
 * @route GET /api/tipsters
 * @desc Récupère tous les tipsters
 * @access Public
 */
router.get("/", TipsterController.getAllTipsters);

export default router;
