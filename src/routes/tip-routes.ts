import express from "express";
import { TipController } from "../controllers/tip-controller";

const router = express.Router();

/**
 * @swagger
 * /api/matches:
 *   get:
 *     summary: Récupère la liste des matchs pour un sport spécifique
 *     tags: [Matches]
 *     parameters:
 *       - in: query
 *         name: sportKey
 *         schema:
 *           type: string
 *         description: "Clé du sport (ex: soccer, basketball)"
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
 *     responses:
 *       200:
 *         description: Liste des matchs récupérée avec succès
 *       400:
 *         description: Paramètres invalides
 *       500:
 *         description: Erreur serveur
 */
router.post("/", TipController.createTip);

/**
 * @swagger
 * /api/tips:
 *   get:
 *     summary: Récupère la liste des pronostics
 *     tags: [Tips]
 *     responses:
 *       200:
 *         description: Liste des pronostics récupérée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.get("/", (req, res) => TipController.getTipsWithMatchsDetails(req, res));

export default router;
