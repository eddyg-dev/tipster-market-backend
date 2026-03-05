-- ========================================
-- 8. Lien paiement -> parrain (commission)
-- ========================================
-- Permet de déduire facilement la commission due à chaque tipster parrain.

ALTER TABLE payments
  ADD COLUMN IF NOT EXISTS referral_tipster_id UUID NULL REFERENCES profiles(id) ON DELETE SET NULL;

COMMENT ON COLUMN payments.referral_tipster_id IS 'Tipster parrain dont le code a été utilisé par cet utilisateur (pour calcul commission)';

CREATE INDEX IF NOT EXISTS idx_payments_referral_tipster_id ON payments(referral_tipster_id);
