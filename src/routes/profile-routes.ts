import express from "express";
import { ProfileController } from "../controllers/profile-controller";

const router = express.Router();
/**
 * @swagger
 * /api/profiles/tipsters:
 *   get:
 *     summary: Récupère tous les tipsters avec leurs statistiques
 *     tags: [Profiles]
 *     responses:
 *       200:
 *         description: Liste des tipsters récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   username:
 *                     type: string
 *                   avatar_url:
 *                     type: string
 *                   win_rate:
 *                     type: number
 *                   roi:
 *                     type: number
 *                   tips_count:
 *                     type: number
 *                   rank:
 *                     type: number
 *       500:
 *         description: Erreur serveur
 */
router.get("/tipsters", ProfileController.getTipsters);

/**
 * @swagger
 * /api/profiles/introduction:
 *   post:
 *     summary: Crée un nouveau profil
 *     tags: [Profiles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 */
router.post("/:id/introduction", ProfileController.saveProfileIntroduction);

/**
 * @swagger
 * /api/profiles/{id}:
 *   get:
 *     summary: Récupère un profil par son ID
 *     tags: [Profiles]
 */
router.get("/:id", ProfileController.getProfileById);

export default router;
