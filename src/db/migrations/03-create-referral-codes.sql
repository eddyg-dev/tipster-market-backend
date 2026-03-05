-- ========================================
-- 3. TABLE DES CODES PARRAINAGE (referral_codes)
-- ========================================
-- Un code unique par tipster / influenceur.

CREATE TABLE IF NOT EXISTS referral_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT NOT NULL UNIQUE,
  tipster_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  is_active BOOLEAN NOT NULL DEFAULT true,
  expires_at TIMESTAMP WITH TIME ZONE NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

COMMENT ON TABLE referral_codes IS 'Codes de parrainage liés à un tipster / influenceur';
COMMENT ON COLUMN referral_codes.code IS 'Code partagé par le tipster / influenceur';
COMMENT ON COLUMN referral_codes.tipster_id IS 'Tipster / influenceur propriétaire du code';

-- Index pour accélérer les recherches par tipster
CREATE INDEX IF NOT EXISTS idx_referral_codes_tipster_id ON referral_codes(tipster_id);

-- RLS (optionnel : lecture/écriture uniquement via service_role)
ALTER TABLE referral_codes ENABLE ROW LEVEL SECURITY;

-- Pas de policies ouvertes : seules les requêtes avec service_role (backend) peuvent accéder à la table.
GRANT ALL ON TABLE referral_codes TO service_role;

