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
 *   post:
 *     summary: Crée un nouveau pronostic
 *     tags: [Tips]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               selectedOutcomes:
 *                 type: array
 *               amount:
 *                 type: number
 *               price:
 *                 type: number
 *               tipsterId:
 *                 type: string
 *               analysis:
 *                 type: string
 *     responses:
 *       201:
 *         description: Pronostic créé avec succès
 *       400:
 *         description: Données manquantes ou invalides
 *       500:
 *         description: Erreur serveur
 */
router.post("/", TipController.createTip);

/**
 * @swagger
 * /api/tips:
 *   get:
 *     summary: Récupère la liste des pronostics avec détails des matches
 *     tags: [Tips]
 *     responses:
 *       200:
 *         description: Liste des pronostics récupérée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.get("/", (req, res) => TipController.getTipsWithMatchsDetails(req, res));

/**
 * @swagger
 * /api/tips/tipster/{tipsterId}:
 *   get:
 *     summary: Récupère les pronostics d'un tipster spécifique
 *     tags: [Tips]
 *     parameters:
 *       - in: path
 *         name: tipsterId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du tipster
 *     responses:
 *       200:
 *         description: Liste des pronostics du tipster récupérée avec succès
 *       404:
 *         description: Tipster non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get("/tipster/:tipsterId", TipController.getTipsByTipster);

export default router;
