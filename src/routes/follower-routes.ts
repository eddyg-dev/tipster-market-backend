import express from "express";
import { FollowerController } from "../controllers/follower-controller";

const router = express.Router();

/**
 * @swagger
 * /api/followers:
 *   post:
 *     summary: Suivre un tipster
 *     tags: [Followers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               follower_id:
 *                 type: string
 *                 description: ID de l'utilisateur qui suit
 *               tipster_id:
 *                 type: string
 *                 description: ID du tipster à suivre
 *     responses:
 *       201:
 *         description: Follow créé avec succès
 *       400:
 *         description: Données invalides
 *       409:
 *         description: Déjà en train de suivre ce tipster
 *       500:
 *         description: Erreur serveur
 */
router.post("/", FollowerController.followTipster);

/**
 * @swagger
 * /api/followers/{follower_id}/{tipster_id}:
 *   delete:
 *     summary: Ne plus suivre un tipster
 *     tags: [Followers]
 *     parameters:
 *       - in: path
 *         name: follower_id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: tipster_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Follow supprimé avec succès
 *       404:
 *         description: Follow non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:follower_id/:tipster_id", FollowerController.unfollowTipster);

/**
 * @swagger
 * /api/followers/user/{follower_id}:
 *   get:
 *     summary: Récupérer les tipsters suivis par un utilisateur
 *     tags: [Followers]
 *     parameters:
 *       - in: path
 *         name: follower_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Liste des tipsters suivis
 *       500:
 *         description: Erreur serveur
 */
router.get("/user/:follower_id", FollowerController.getFollowedTipsters);

/**
 * @swagger
 * /api/followers/tipster/{tipster_id}:
 *   get:
 *     summary: Récupérer les followers d'un tipster
 *     tags: [Followers]
 *     parameters:
 *       - in: path
 *         name: tipster_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Liste des followers
 *       500:
 *         description: Erreur serveur
 */
router.get("/tipster/:tipster_id", FollowerController.getTipsterFollowers);

/**
 * @swagger
 * /api/followers/check/{follower_id}/{tipster_id}:
 *   get:
 *     summary: Vérifier si un utilisateur suit un tipster
 *     tags: [Followers]
 *     parameters:
 *       - in: path
 *         name: follower_id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: tipster_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Statut du follow
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isFollowing:
 *                   type: boolean
 *       500:
 *         description: Erreur serveur
 */
router.get(
  "/check/:follower_id/:tipster_id",
  FollowerController.checkFollowStatus
);

/**
 * @swagger
 * /api/followers/favorites:
 *   post:
 *     summary: Ajouter un tipster aux favoris
 *     tags: [Favorites]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: string
 *               tipster_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tipster ajouté aux favoris
 *       409:
 *         description: Déjà dans les favoris
 *       500:
 *         description: Erreur serveur
 */
router.post("/favorites", FollowerController.addToFavorites);

/**
 * @swagger
 * /api/followers/favorites/{user_id}/{tipster_id}:
 *   delete:
 *     summary: Retirer un tipster des favoris
 *     tags: [Favorites]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: tipster_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tipster retiré des favoris
 *       404:
 *         description: Non trouvé dans les favoris
 *       500:
 *         description: Erreur serveur
 */
router.delete(
  "/favorites/:user_id/:tipster_id",
  FollowerController.removeFromFavorites
);

/**
 * @swagger
 * /api/followers/favorites/{user_id}:
 *   get:
 *     summary: Récupérer les tipsters favoris d'un utilisateur
 *     tags: [Favorites]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Liste des favoris
 *       500:
 *         description: Erreur serveur
 */
router.get("/favorites/:user_id", FollowerController.getFavorites);

/**
 * @swagger
 * /api/followers/favorites/check/{user_id}/{tipster_id}:
 *   get:
 *     summary: Vérifier si un tipster est dans les favoris
 *     tags: [Favorites]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: tipster_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Statut favori
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isFavorite:
 *                   type: boolean
 *       500:
 *         description: Erreur serveur
 */
router.get(
  "/favorites/check/:user_id/:tipster_id",
  FollowerController.checkFavoriteStatus
);

export default router;
