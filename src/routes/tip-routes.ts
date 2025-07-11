import express from "express";
import { TipController } from "../controllers/tip-controller";

const router = express.Router();

/**
 * @swagger
 * /api/tips:
 *   post:
 *     summary: Crée un nouveau pronostic
 *     tags: [Tips]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - selectedOutcomes
 *               - amount
 *               - price
 *             properties:
 *               selectedOutcomes:
 *                 type: array
 *                 items:
 *                   type: object
 *               amount:
 *                 type: number
 *               price:
 *                 type: number
 *               analysis:
 *                 type: string
 *     responses:
 *       201:
 *         description: Pronostic créé avec succès
 *       400:
 *         description: Données manquantes ou invalides
 *       401:
 *         description: Utilisateur non authentifié
 *       500:
 *         description: Erreur serveur
 */
router.post("/", TipController.createTip);

/**
 * @swagger
 * /api/tips/on-sale:
 *   get:
 *     summary: Récupère la liste des pronostics en vente
 *     tags: [Tips]
 *     responses:
 *       200:
 *         description: Liste des pronostics en vente récupérée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.get("/on-sale", TipController.getOnSaleTips);

export default router;
