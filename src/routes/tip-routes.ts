import express from "express";
import { TipController } from "../controllers/tip-controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", authMiddleware, TipController.createTip);
router.get("/", TipController.getTips);
router.get("/:id", TipController.getTip);
router.get("/tipster/:tipsterId", TipController.getTipsByTipsterId);

export default router;
