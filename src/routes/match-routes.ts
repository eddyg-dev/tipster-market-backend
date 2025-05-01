import express from "express";
import { MatchController } from "../controllers/match-controller";

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
router.get("/", MatchController.getAllMatches);

/**
 * @swagger
 * /api/matches/{id}:
 *   get:
 *     summary: Récupère les détails d'un match spécifique
 *     tags: [Matches]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: "ID du match"
 *       - in: query
 *         name: sportKey
 *         required: true
 *         schema:
 *           type: string
 *         description: "Clé du sport"
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
 *         description: Détails du match récupérés avec succès
 *       400:
 *         description: Paramètres invalides
 *       404:
 *         description: Match non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get("/:id", MatchController.getMatchById);

export default router;
