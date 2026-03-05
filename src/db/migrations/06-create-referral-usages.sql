-- ========================================
-- 6. TABLE DES UTILISATIONS DE CODES PARRAINAGE (referral_usages)
-- ========================================
-- Chaque ligne correspond à une utilisation d'un code promo
-- (validation de code par un utilisateur, indépendamment du paiement).

CREATE TABLE IF NOT EXISTS referral_usages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  tipster_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  referral_code TEXT NOT NULL,
  used_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  CONSTRAINT referral_usages_user_code_unique UNIQUE (user_id, referral_code)
);

COMMENT ON TABLE referral_usages IS 'Historique des utilisations de codes parrainage (user -> tipster, code, date)';
COMMENT ON COLUMN referral_usages.user_id IS 'Utilisateur qui a saisi le code promo';
COMMENT ON COLUMN referral_usages.tipster_id IS 'Tipster / influenceur propriétaire du code promo';
COMMENT ON COLUMN referral_usages.referral_code IS 'Code promo utilisé';
COMMENT ON COLUMN referral_usages.used_at IS 'Date de l''utilisation du code';

CREATE INDEX IF NOT EXISTS idx_referral_usages_tipster_id ON referral_usages(tipster_id);
CREATE INDEX IF NOT EXISTS idx_referral_usages_user_id ON referral_usages(user_id);
CREATE INDEX IF NOT EXISTS idx_referral_usages_used_at ON referral_usages(used_at);

ALTER TABLE referral_usages ENABLE ROW LEVEL SECURITY;
GRANT ALL ON TABLE referral_usages TO service_role;

