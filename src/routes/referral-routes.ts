import express from "express";
import { ReferralController } from "../controllers/referral-controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = express.Router();

// Dernier code utilisé par l'utilisateur (pour pré-remplir la page offres)
router.get("/used-code", authMiddleware, ReferralController.getUsedCode);
// Reset du code utilisé (si devenu invalide)
router.delete("/used-code", authMiddleware, ReferralController.clearUsedCode);
// Validation d'un code de parrainage (requiert un utilisateur connecté pour tracer user_id)
router.post("/validate", authMiddleware, ReferralController.validateCode);

export default router;

