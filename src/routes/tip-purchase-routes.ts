import express from "express";
import { TipPurchaseController } from "../controllers/tip-purchase-controller";

const router = express.Router();

/**
 * @swagger
 * /api/tip-purchases:
 *   post:
 *     summary: Crée un nouvel achat de tip
 *     tags: [Tip Purchases]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tip_id:
 *                 type: string
 *                 description: ID du tip à acheter
 *               buyer_id:
 *                 type: string
 *                 description: ID de l'acheteur (doit être un utilisateur)
 *     responses:
 *       201:
 *         description: Achat créé avec succès
 *       400:
 *         description: Données manquantes ou invalides
 *       404:
 *         description: Tip non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.post("/", TipPurchaseController.createPurchase);

/**
 * @swagger
 * /api/tip-purchases/user/{buyer_id}:
 *   get:
 *     summary: Récupère les achats d'un utilisateur
 *     tags: [Tip Purchases]
 *     parameters:
 *       - in: path
 *         name: buyer_id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'acheteur
 *     responses:
 *       200:
 *         description: Liste des achats récupérée avec succès
 *       404:
 *         description: Utilisateur non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get("/user/:buyer_id", TipPurchaseController.getUserPurchases);

/**
 * @swagger
 * /api/tip-purchases/{id}/cancel:
 *   put:
 *     summary: Annule un achat
 *     tags: [Tip Purchases]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'achat à annuler
 *     responses:
 *       200:
 *         description: Achat annulé avec succès
 *       500:
 *         description: Erreur serveur
 */
router.put("/:id/cancel", TipPurchaseController.cancelPurchase);

export default router;
