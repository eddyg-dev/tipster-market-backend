export interface TipPurchase {
  id: string;
  tip_id: string;
  buyer_id: string;
  created_at: string;
  status: "completed" | "cancelled" | "refunded" | "pending";
}
