import { Router } from 'express';
import { HealthController } from '../controllers/health-controller';

const router = Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check endpoint pour monitoring
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Serveur opérationnel
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "ok"
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                   example: "2026-02-12T10:30:00.000Z"
 *                 uptime:
 *                   type: number
 *                   description: Uptime du serveur en secondes
 *                   example: 3600
 */
router.get('/', HealthController.healthCheck);

export default router;
