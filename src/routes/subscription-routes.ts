import { Router } from "express";
import { SubscriptionController } from "../controllers/subscription-controller";

const router = Router();

// Stripe exige le body brut pour la vérification de signature
import express from "express";
router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  SubscriptionController.handleStripeWebhook
);

export default router;
