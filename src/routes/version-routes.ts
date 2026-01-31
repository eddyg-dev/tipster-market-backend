import { Router } from 'express';
import { VersionController } from '../controllers/version-controller';

const router = Router();

/**
 * @swagger
 * /api/version:
 *   get:
 *     summary: Récupère la version minimale requise et vérifie si mise à jour nécessaire
 *     tags: [Version]
 *     parameters:
 *       - in: query
 *         name: current
 *         required: true
 *         schema:
 *           type: string
 *         description: Version actuelle du frontend
 *         example: "1.0.0"
 *     responses:
 *       200:
 *         description: Version minimale requise et statut de mise à jour
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 min_version:
 *                   type: string
 *                   example: "2.0.0"
 *                 forceUpdate:
 *                   type: boolean
 *                   description: True si la version majeure est différente
 *                   example: true
 */
router.get('/', VersionController.checkVersion);

export default router;
