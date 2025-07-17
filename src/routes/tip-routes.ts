import express from "express";
import { TipController } from "../controllers/tip-controller";

const router = express.Router();

router.post("/", TipController.createTip);
router.get("/", TipController.getTips);
router.get("/:id", TipController.getTip);

export default router;
