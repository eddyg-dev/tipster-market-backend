import { SubscriptionLevel } from "../enums/subscription-level.enum";

export interface Payment {
  id: string;
  user_id: string;
  paid_at: string;
  transaction_id: string;
  product_id: string;
  platform: "google_play" | "apple_appstore";
  subscription_level: SubscriptionLevel;
  referral_tipster_id?: string | null;
  created_at: string;
}

export type PaymentPlatform = "google_play" | "apple_appstore";

export interface RecordPaymentBody {
  transactionId: string;
  productId: string;
  platform: string;
  paidAt?: string;
  subscriptionLevel?: SubscriptionLevel;
}
