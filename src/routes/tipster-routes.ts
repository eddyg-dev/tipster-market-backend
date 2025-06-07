import express from "express";
import { TipsterController } from "../controllers/tipster-controller";

const router = express.Router();

/**
 * @route GET /api/tipsters
 * @desc Récupère tous les tipsters
 * @access Public
 */
router.get("/", TipsterController.getAllTipsters);

/**
 * @route GET /api/tipsters/:id
 * @desc Récupère un tipster par son ID
 * @access Public
 */
router.get("/:id", TipsterController.getTipsterById);
export default router;
