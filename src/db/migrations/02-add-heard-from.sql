-- Champ "Comment nous as-tu connu ?" (optionnel, rempli à l'intro)
ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS heard_from TEXT;

COMMENT ON COLUMN profiles.heard_from IS 'Source de découverte de l''app (ex: reseau, bouche_a_oreille, pub, recherche, autre)';
