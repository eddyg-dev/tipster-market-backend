-- ========================================
-- Favoris : les utilisateurs peuvent mettre des tipsters en favori
-- ========================================
-- À exécuter sur une base déjà initialisée (post init-v0).
-- Table : user_id (utilisateur) -> tipster_id (tipster favori).

-- ========================================
-- 1. TABLE
-- ========================================
CREATE TABLE IF NOT EXISTS favorite_tipsters (
  user_id UUID NOT NULL,
  tipster_id UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  PRIMARY KEY (user_id, tipster_id),
  CONSTRAINT fk_favorite_user FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE,
  CONSTRAINT fk_favorite_tipster FOREIGN KEY (tipster_id) REFERENCES profiles(id) ON DELETE CASCADE,
  CONSTRAINT chk_no_self_favorite CHECK (user_id != tipster_id)
);

COMMENT ON TABLE favorite_tipsters IS 'Tipsters mis en favori par les utilisateurs (user -> tipster)';

-- ========================================
-- 2. INDEXES
-- ========================================
CREATE INDEX IF NOT EXISTS idx_favorite_tipsters_user_id ON favorite_tipsters(user_id);
CREATE INDEX IF NOT EXISTS idx_favorite_tipsters_tipster_id ON favorite_tipsters(tipster_id);
CREATE INDEX IF NOT EXISTS idx_favorite_tipsters_created_at ON favorite_tipsters(created_at DESC);

-- ========================================
-- 3. RLS
-- ========================================
ALTER TABLE favorite_tipsters ENABLE ROW LEVEL SECURITY;

-- Lecture : uniquement ses propres favoris
CREATE POLICY "favorite_tipsters_select_own" ON favorite_tipsters
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Insertion : uniquement pour soi (user_id = auth.uid())
CREATE POLICY "favorite_tipsters_insert_own" ON favorite_tipsters
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Suppression : uniquement ses propres favoris
CREATE POLICY "favorite_tipsters_delete_own" ON favorite_tipsters
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Pas d'UPDATE prévu (on ajoute/supprime, on ne modifie pas)

GRANT ALL ON TABLE favorite_tipsters TO service_role;
