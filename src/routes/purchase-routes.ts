import express from "express";
import { PurchaseController } from "../controllers/purchase-controller";

const router = express.Router();

router.post("/", PurchaseController.createPurchase);
router.get("/user/:buyer_id", PurchaseController.getUserPurchases);

export default router;
