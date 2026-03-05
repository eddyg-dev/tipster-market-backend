import express from "express";
import { ReferralController } from "../controllers/referral-controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = express.Router();

// Validation d'un code de parrainage (requiert un utilisateur connecté pour tracer user_id)
router.post("/validate", authMiddleware, ReferralController.validateCode);

export default router;

