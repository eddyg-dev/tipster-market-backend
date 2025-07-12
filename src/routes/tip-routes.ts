import express from "express";
import { TipController } from "../controllers/tip-controller";

const router = express.Router();

router.post("/", TipController.createTip);
router.get("/on-sale", TipController.getOnSaleTips);

export default router;
