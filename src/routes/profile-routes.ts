import express from "express";
import { ProfileController } from "../controllers/profile-controller";

const router = express.Router();
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
 * /api/profiles:
 *   get:
 *     summary: Récupère tous les profils
 *     tags: [Profiles]
 *     responses:
 *       200:
 *         description: Liste des profils récupérée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.get("/", ProfileController.getProfiles);

/**
 * @swagger
 * /api/profiles/{id}:
 *   get:
 *     summary: Récupère un profil par son ID
 *     tags: [Profiles]
 */
router.get("/:id", ProfileController.getProfileById);

export default router;
