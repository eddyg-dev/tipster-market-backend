import { Request, Response } from "express";
import Stripe from "stripe";
import { supabase } from "../config/supabase";
import { SubscriptionLevel } from "../shared-data/enums/subscription-level.enum";

function parseStripeStatusToSubscriptionLevel(
  status: string
): SubscriptionLevel {
  return status === "active"
    ? SubscriptionLevel.PREMIUM
    : SubscriptionLevel.FREE;
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-06-30.basil",
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export class SubscriptionController {
  static async handleStripeWebhook(req: Request, res: Response) {
    let event = req.body;
    if (endpointSecret) {
      const signature = req.headers["stripe-signature"] as string;
      try {
        event = stripe.webhooks.constructEvent(
          req.body,
          signature,
          endpointSecret
        );
      } catch (err: any) {
        console.log(`⚠️  Webhook signature verification failed.`, err.message);
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
      }
    }
    console.log("event type", event.type);

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.user_id;
        if (userId) {
          console.log(`Mise à jour abonnement user ${userId} -> premium`);
          await supabase
            .from("profiles")
            .update({ subscription_level: SubscriptionLevel.PREMIUM })
            .eq("id", userId);
        } else {
          console.log("Pas de user_id dans metadata de la session Stripe");
        }
        break;
      }
      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        const userId = subscription.metadata?.user_id;
        if (userId) {
          const newLevel = parseStripeStatusToSubscriptionLevel(
            subscription.status
          );
          console.log(
            `Mise à jour abonnement user ${userId} -> ${newLevel} (status Stripe: ${subscription.status})`
          );
          await supabase
            .from("profiles")
            .update({ subscription_level: newLevel })
            .eq("id", userId);
        } else {
          console.log("Pas de user_id dans metadata de la subscription Stripe");
        }
        break;
      }
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const userId = subscription.metadata?.user_id;
        if (userId) {
          const newLevel = parseStripeStatusToSubscriptionLevel(
            subscription.status
          );
          console.log(`Abonnement supprimé pour user ${userId} -> ${newLevel}`);
          await supabase
            .from("profiles")
            .update({ subscription_level: newLevel })
            .eq("id", userId);
        } else {
          console.log("Pas de user_id dans metadata de la subscription Stripe");
        }
        break;
      }
      default:
        console.log(`Unhandled event type ${event.type}.`);
    }

    res.send();
  }
}
