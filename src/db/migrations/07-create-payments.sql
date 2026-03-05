-- ========================================
-- 7. TABLE DES PAIEMENTS (payments)
-- ========================================
-- Chaque ligne correspond à un paiement ou renouvellement d'abonnement
-- enregistré par l'app (Google Play / App Store) via le front.

CREATE TABLE IF NOT EXISTS payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  paid_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT timezone('utc'::text, now()),
  transaction_id TEXT NOT NULL,
  product_id TEXT NOT NULL,
  platform TEXT NOT NULL,
  subscription_level subscription_level NOT NULL DEFAULT 'premium',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  CONSTRAINT payments_transaction_user_unique UNIQUE (user_id, transaction_id),
  CONSTRAINT payments_platform_check CHECK (platform IN ('google_play', 'apple_appstore'))
);

COMMENT ON TABLE payments IS 'Historique des paiements et renouvellements d''abonnement';
COMMENT ON COLUMN payments.user_id IS 'Utilisateur ayant effectué le paiement';
COMMENT ON COLUMN payments.paid_at IS 'Date/heure du paiement';
COMMENT ON COLUMN payments.transaction_id IS 'Identifiant unique de la transaction (store) pour idempotence';
COMMENT ON COLUMN payments.product_id IS 'Identifiant du produit acheté (ex: pdo_premium)';
COMMENT ON COLUMN payments.platform IS 'Plateforme: google_play ou apple_appstore';
COMMENT ON COLUMN payments.subscription_level IS 'Niveau d''abonnement associé au produit';

CREATE INDEX IF NOT EXISTS idx_payments_user_id ON payments(user_id);
CREATE INDEX IF NOT EXISTS idx_payments_paid_at ON payments(paid_at DESC);
CREATE INDEX IF NOT EXISTS idx_payments_transaction_id ON payments(transaction_id);

ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
GRANT ALL ON TABLE payments TO service_role;

-- Lecture : l'utilisateur ne voit que ses propres paiements
CREATE POLICY "payments_select_own" ON payments
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Insertion : l'utilisateur ne peut enregistrer que pour lui-même (via l'API backend qui vérifie auth)
-- Les insertions passent par le backend avec service_role, pas en direct depuis le client Supabase.
-- On autorise INSERT si user_id = auth.uid() pour les appels depuis l'API avec le JWT.
CREATE POLICY "payments_insert_own" ON payments
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);
