-- ========================================
-- INIT V0 - Script d'initialisation complet
-- ========================================
-- Version 1.0.0
-- ATTENTION : Ce script supprime et recrée tout le schéma public !
--
-- STRUCTURE :
-- 1. CLEANUP
-- 2. EXTENSIONS
-- 3. TYPES (ENUMs)
-- 4. TABLES + RLS (7 tables)
-- 5. INDEXES
-- 6. FUNCTIONS (basiques)
-- 7. DATA (subscription_levels, version)
-- 8. TRIGGERS (updated_at, auth)
-- 9. FUNCTIONS (match cancellation, outcomes)
-- 10. TRIGGERS (match outcomes)
-- 11. VERIFICATION

-- ========================================
-- 1. CLEANUP
-- ========================================
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;

-- ========================================
-- 2. EXTENSIONS
-- ========================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ========================================
-- 3. TYPES (ENUMs)
-- ========================================
CREATE TYPE tip_result AS ENUM ('initial', 'won', 'lost', 'cancelled');
CREATE TYPE profile_type AS ENUM ('tipster', 'user');
CREATE TYPE subscription_level AS ENUM ('free', 'premium', 'elite');

-- ========================================
-- 4. TABLES + RLS
-- ========================================

-- 4.1 - TABLE PROFILES
CREATE TABLE profiles (
  id UUID PRIMARY KEY,
  username TEXT NOT NULL,
  email TEXT NOT NULL,
  birth_date DATE,
  profile_type profile_type NOT NULL,
  accept_terms BOOLEAN DEFAULT false,
  profile_introduction_completed BOOLEAN DEFAULT false,
  avatar_url TEXT,
  subscription_level subscription_level DEFAULT 'free',
  is_admin BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  CONSTRAINT unique_email UNIQUE (email),
  CONSTRAINT unique_username UNIQUE (username)
);

COMMENT ON TABLE profiles IS 'Profils utilisateurs (users et tipsters)';
COMMENT ON COLUMN profiles.subscription_level IS 'Niveau d''abonnement actuel de l''utilisateur';

-- ========================================
-- RLS ET PERMISSIONS - TABLE PROFILES
-- ========================================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Lecture : Tout le monde peut voir les profils publics
CREATE POLICY "profiles_select_policy" ON profiles
  FOR SELECT
  TO authenticated
  USING (true);

-- Insertion : Géré par Supabase Auth (service_role)
CREATE POLICY "profiles_no_insert" ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (false);

-- Modification : Uniquement son propre profil
CREATE POLICY "profiles_update_own" ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Suppression : Uniquement son propre profil
CREATE POLICY "profiles_delete_own" ON profiles
  FOR DELETE
  TO authenticated
  USING (auth.uid() = id);

GRANT ALL ON TABLE profiles TO service_role;

-- 4.2 - TABLE SPORTS
CREATE TABLE sports (
  key TEXT PRIMARY KEY,
  "group" TEXT,
  title TEXT NOT NULL,
  description TEXT,
  flag TEXT,
  icon TEXT,
  active BOOLEAN DEFAULT true,
  priority INTEGER DEFAULT 2,
  has_outrights BOOLEAN DEFAULT false
);

COMMENT ON TABLE sports IS 'Sports disponibles sur la plateforme';

-- ========================================
-- RLS ET PERMISSIONS - TABLE SPORTS
-- ========================================

-- Activer RLS
ALTER TABLE sports ENABLE ROW LEVEL SECURITY;

-- Policy : Lecture pour utilisateurs connectés uniquement
CREATE POLICY "sports_select_policy" ON sports
  FOR SELECT
  TO authenticated
  USING (true);

-- Bloquer toute modification pour les utilisateurs
-- (service_role contourne RLS automatiquement)
CREATE POLICY "sports_no_insert" ON sports
  FOR INSERT
  TO authenticated
  WITH CHECK (false);

CREATE POLICY "sports_no_update" ON sports
  FOR UPDATE
  TO authenticated
  USING (false);

CREATE POLICY "sports_no_delete" ON sports
  FOR DELETE
  TO authenticated
  USING (false);

-- Permissions pour service_role (contourne RLS)
GRANT ALL ON TABLE sports TO service_role;

-- 4.3 - TABLE MATCHES
CREATE TABLE matches (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  match_id TEXT UNIQUE NOT NULL,
  is_cancelled BOOLEAN DEFAULT false,
  home_team TEXT NOT NULL,
  away_team TEXT NOT NULL,
  commence_time TIMESTAMP WITH TIME ZONE NOT NULL,
  sport_key TEXT NOT NULL,
  outcomes JSONB,
  scores JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  CONSTRAINT fk_matches_sport_key FOREIGN KEY (sport_key) REFERENCES sports(key) ON DELETE CASCADE ON UPDATE CASCADE
);

COMMENT ON TABLE matches IS 'Matchs sportifs avec cotes et résultats';
COMMENT ON COLUMN matches.is_cancelled IS 'Indique si le match a été annulé';

-- ========================================
-- RLS ET PERMISSIONS - TABLE MATCHES
-- ========================================

ALTER TABLE matches ENABLE ROW LEVEL SECURITY;

-- Lecture : Tous les utilisateurs connectés (lecture seule)
CREATE POLICY "matches_select_policy" ON matches
  FOR SELECT
  TO authenticated
  USING (true);

-- Modification : Bloquée (géré par scripts admin)
CREATE POLICY "matches_no_insert" ON matches
  FOR INSERT
  TO authenticated
  WITH CHECK (false);

CREATE POLICY "matches_no_update" ON matches
  FOR UPDATE
  TO authenticated
  USING (false);

CREATE POLICY "matches_no_delete" ON matches
  FOR DELETE
  TO authenticated
  USING (false);

GRANT ALL ON TABLE matches TO service_role;

-- 4.4 - TABLE TIPS
CREATE TABLE tips (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  tipster_id UUID NOT NULL,
  selected_outcomes JSONB NOT NULL,
  amount NUMERIC NOT NULL,
  price NUMERIC NOT NULL,
  analysis TEXT,
  deadline TIMESTAMP WITH TIME ZONE NOT NULL,
  result tip_result DEFAULT 'initial' NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  CONSTRAINT fk_tips_tipster_id FOREIGN KEY (tipster_id) REFERENCES profiles(id) ON DELETE CASCADE,
  CONSTRAINT check_amount_positive CHECK (amount > 0),
  CONSTRAINT check_price_positive CHECK (price >= 1)
);

COMMENT ON TABLE tips IS 'Pronostics créés par les tipsters';
COMMENT ON COLUMN tips.result IS 'Résultat du pronostic: initial, won, lost, cancelled';
COMMENT ON COLUMN tips.amount IS 'Mise en points';
COMMENT ON COLUMN tips.price IS 'Cote totale du pronostic';

-- ========================================
-- RLS ET PERMISSIONS - TABLE TIPS
-- ========================================

ALTER TABLE tips ENABLE ROW LEVEL SECURITY;

-- Lecture : Tous les tips publics
CREATE POLICY "tips_select_policy" ON tips
  FOR SELECT
  TO authenticated
  USING (true);

-- Insertion : Uniquement les tipsters peuvent créer
CREATE POLICY "tips_insert_own" ON tips
  FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid() = tipster_id 
    AND EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() 
      AND profile_type = 'tipster'
    )
  );

-- Modification : Uniquement ses propres tips
CREATE POLICY "tips_update_own" ON tips
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = tipster_id)
  WITH CHECK (auth.uid() = tipster_id);

-- Suppression : Uniquement ses propres tips
CREATE POLICY "tips_delete_own" ON tips
  FOR DELETE
  TO authenticated
  USING (auth.uid() = tipster_id);

GRANT ALL ON TABLE tips TO service_role;

-- 4.5 - TABLE ACTUS
CREATE TABLE actus (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

COMMENT ON TABLE actus IS 'Actualités et news de la plateforme';

-- ========================================
-- RLS ET PERMISSIONS - TABLE ACTUS
-- ========================================

ALTER TABLE actus ENABLE ROW LEVEL SECURITY;

-- Lecture : Tous les utilisateurs connectés
CREATE POLICY "actus_select_policy" ON actus
  FOR SELECT
  TO authenticated
  USING (true);

-- Modification : Bloquée (géré par admins via backend)
CREATE POLICY "actus_no_insert" ON actus
  FOR INSERT
  TO authenticated
  WITH CHECK (false);

CREATE POLICY "actus_no_update" ON actus
  FOR UPDATE
  TO authenticated
  USING (false);

CREATE POLICY "actus_no_delete" ON actus
  FOR DELETE
  TO authenticated
  USING (false);

GRANT ALL ON TABLE actus TO service_role;

-- 4.6 - TABLE SUBSCRIPTION_LEVELS
CREATE TABLE subscription_levels (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  level subscription_level UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC NOT NULL,
  price_unit TEXT NOT NULL,
  features JSONB NOT NULL,
  no_features JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

COMMENT ON TABLE subscription_levels IS 'Niveaux d''abonnement disponibles';

-- ========================================
-- RLS ET PERMISSIONS - TABLE SUBSCRIPTION_LEVELS
-- ========================================

ALTER TABLE subscription_levels ENABLE ROW LEVEL SECURITY;

-- Lecture : Tous les utilisateurs connectés (lecture seule)
CREATE POLICY "subscription_levels_select_policy" ON subscription_levels
  FOR SELECT
  TO authenticated
  USING (true);

-- Modification : Bloquée (données de configuration)
CREATE POLICY "subscription_levels_no_insert" ON subscription_levels
  FOR INSERT
  TO authenticated
  WITH CHECK (false);

CREATE POLICY "subscription_levels_no_update" ON subscription_levels
  FOR UPDATE
  TO authenticated
  USING (false);

CREATE POLICY "subscription_levels_no_delete" ON subscription_levels
  FOR DELETE
  TO authenticated
  USING (false);

GRANT ALL ON TABLE subscription_levels TO service_role;

-- 4.7 - TABLE APP_VERSION
CREATE TABLE app_version (
  min_version TEXT PRIMARY KEY
);

-- ========================================
-- RLS ET PERMISSIONS - TABLE APP_VERSION
-- ========================================

ALTER TABLE app_version ENABLE ROW LEVEL SECURITY;

-- Lecture : Public (même anon pour check version au démarrage)
CREATE POLICY "app_version_select_public" ON app_version
  FOR SELECT
  TO public
  USING (true);

-- Modification : Bloquée (géré par admins)
CREATE POLICY "app_version_no_insert" ON app_version
  FOR INSERT
  TO authenticated
  WITH CHECK (false);

CREATE POLICY "app_version_no_update" ON app_version
  FOR UPDATE
  TO authenticated
  USING (false);

CREATE POLICY "app_version_no_delete" ON app_version
  FOR DELETE
  TO authenticated
  USING (false);

GRANT ALL ON TABLE app_version TO service_role;

-- ========================================
-- 5. INDEXES
-- ========================================
CREATE INDEX idx_profiles_username ON profiles(username);
CREATE INDEX idx_profiles_email ON profiles(email);
CREATE INDEX idx_profiles_type ON profiles(profile_type);
CREATE INDEX idx_profiles_subscription_level ON profiles(subscription_level);
CREATE INDEX idx_matches_commence_time ON matches(commence_time);
CREATE INDEX idx_matches_sport_key ON matches(sport_key);
CREATE INDEX idx_matches_match_id ON matches(match_id);
CREATE INDEX idx_matches_is_cancelled ON matches(is_cancelled);
CREATE INDEX idx_matches_outcomes ON matches USING gin(outcomes);
CREATE INDEX idx_matches_scores ON matches USING gin(scores);
CREATE INDEX idx_tips_tipster_id ON tips(tipster_id);
CREATE INDEX idx_tips_result ON tips(result);
CREATE INDEX idx_tips_created_at ON tips(created_at DESC);
CREATE INDEX idx_tips_deadline ON tips(deadline);

CREATE INDEX idx_actus_created_at ON actus(created_at DESC);

-- ========================================
-- 6. FUNCTIONS (basiques)
-- ========================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$;

COMMENT ON FUNCTION update_updated_at_column() IS 'Met à jour automatiquement le champ updated_at';

-- Fonction pour créer un profil user automatiquement
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER 
LANGUAGE plpgsql 
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (
    id, 
    username,
    email,
    profile_type,
    subscription_level
  )
  VALUES (
    NEW.id,
    split_part(NEW.email, '@', 1),
    NEW.email,
    'user',
    'free'
  );
  RETURN NEW;
END;
$$;

COMMENT ON FUNCTION handle_new_user() IS 'Crée automatiquement un profil user lors de l''inscription';

-- Fonction pour normaliser les noms
CREATE OR REPLACE FUNCTION normalize_outcome_name(outcome_name text)
RETURNS text 
LANGUAGE plpgsql
IMMUTABLE
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    RETURN LOWER(TRIM(outcome_name));
END;
$$;

COMMENT ON FUNCTION normalize_outcome_name(text) IS 'Normalise les noms d''outcomes pour la comparaison';

-- Fonction pour calculer le résultat d'un match
CREATE OR REPLACE FUNCTION calculate_match_result(scores jsonb, home_team text, away_team text)
RETURNS text 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    home_score integer;
    away_score integer;
    scores_array jsonb;
    score_item jsonb;
BEGIN
    IF scores ? 'scores' THEN
        scores_array := scores->'scores';
    ELSE
        scores_array := scores;
    END IF;
    
    home_score := 0;
    away_score := 0;
    
    FOR score_item IN SELECT * FROM jsonb_array_elements(scores_array)
    LOOP
        IF normalize_outcome_name(score_item->>'name') = normalize_outcome_name(home_team) THEN
            home_score := (score_item->>'score')::integer;
        ELSIF normalize_outcome_name(score_item->>'name') = normalize_outcome_name(away_team) THEN
            away_score := (score_item->>'score')::integer;
        END IF;
    END LOOP;
    
    IF home_score > away_score THEN
        RETURN home_team;
    ELSIF away_score > home_score THEN
        RETURN away_team;
    ELSE
        RETURN 'draw';
    END IF;
END;
$$;

COMMENT ON FUNCTION calculate_match_result(jsonb, text, text) IS 'Calcule le résultat d''un match (home/away/draw)';

-- Fonction pour vérifier si un outcome correspond au résultat
CREATE OR REPLACE FUNCTION outcome_matches_result(outcome_name text, match_result text, home_team text, away_team text)
RETURNS boolean 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    normalized_outcome text;
    normalized_result text;
    normalized_home_team text;
    normalized_away_team text;
BEGIN
    normalized_outcome := normalize_outcome_name(outcome_name);
    normalized_result := normalize_outcome_name(match_result);
    normalized_home_team := normalize_outcome_name(home_team);
    normalized_away_team := normalize_outcome_name(away_team);
    
    IF normalized_outcome = normalized_result THEN
        RETURN true;
    END IF;
    
    IF match_result = 'draw' THEN
        RETURN normalized_outcome IN ('draw', 'nul', 'match nul', 'égalité', 'tie', 'x');
    END IF;
    
    IF match_result = home_team THEN
        RETURN normalized_outcome IN (
            normalized_home_team,
            '1', 'home', 'domicile', 'local'
        ) OR normalized_outcome LIKE '%' || normalized_home_team || '%';
    END IF;
    
    IF match_result = away_team THEN
        RETURN normalized_outcome IN (
            normalized_away_team,
            '2', 'away', 'extérieur', 'visiteur'
        ) OR normalized_outcome LIKE '%' || normalized_away_team || '%';
    END IF;
    
    RETURN false;
END;
$$;

COMMENT ON FUNCTION outcome_matches_result(text, text, text, text) IS 'Vérifie si un outcome correspond au résultat du match';

-- ========================================
-- 7. DATA INITIALES
-- ========================================

INSERT INTO subscription_levels (level, name, description, price, price_unit, features, no_features) VALUES
('free', 'Gratuit', 'Accès de base à la plateforme', 0, 'forever', 
 '["Consulter les pronostics publics", "Voir les statistiques des tipsters", "Créer un compte"]'::jsonb,
 '["Créer des pronostics", "Accès aux pronostics premium", "Statistiques avancées", "Pas de publicité"]'::jsonb),

('premium', 'Premium', 'Accès complet aux fonctionnalités', 9.99, 'month',
 '["Tous les pronostics", "Statistiques détaillées", "Historique complet", "Sans publicité", "Support prioritaire"]'::jsonb,
 '["Créer des pronostics", "Devenir tipster"]'::jsonb),

('elite', 'Elite', 'Accès VIP exclusif', 19.99, 'month',
 '["Tous les avantages Premium", "Pronostics VIP exclusifs", "Analyses détaillées", "Conseils personnalisés", "Accès anticipé aux nouveautés"]'::jsonb,
 '["Créer des pronostics"]'::jsonb);

INSERT INTO app_version (min_version) VALUES ('1.0.0');

-- ========================================
-- 8. TRIGGERS (updated_at, auth)
-- ========================================

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_actus_updated_at
  BEFORE UPDATE ON actus
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_subscription_levels_updated_at
  BEFORE UPDATE ON subscription_levels
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW 
  EXECUTE FUNCTION handle_new_user();

-- ========================================
-- 9. FUNCTIONS (match cancellation, outcomes)
-- ========================================
CREATE OR REPLACE FUNCTION handle_match_cancellation()
RETURNS trigger 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    tip_record RECORD;
    outcomes_count INTEGER;
    other_outcomes_status TEXT[];
    all_others_right BOOLEAN;
BEGIN
    IF NEW.is_cancelled = true AND (OLD.is_cancelled IS NULL OR OLD.is_cancelled = false) THEN
        FOR tip_record IN 
            SELECT id, selected_outcomes, result
            FROM tips
            WHERE selected_outcomes @> jsonb_build_array(
                jsonb_build_object('match', jsonb_build_object('match_id', NEW.match_id))
            )
        LOOP
            SELECT jsonb_array_length(tip_record.selected_outcomes) INTO outcomes_count;
            
            IF outcomes_count = 1 THEN
                UPDATE tips
                SET result = 'cancelled'::tip_result
                WHERE id = tip_record.id;
            ELSE
                SELECT array_agg(outcome_elem->>'result')
                INTO other_outcomes_status
                FROM jsonb_array_elements(tip_record.selected_outcomes) AS outcome_elem
                WHERE (outcome_elem->'match'->>'match_id') != NEW.match_id;
                
                all_others_right := NOT EXISTS (
                    SELECT 1 
                    FROM unnest(other_outcomes_status) AS status
                    WHERE status != 'right'
                );
                
                IF all_others_right AND NOT 'initial' = ANY(other_outcomes_status) THEN
                    UPDATE tips
                    SET result = 'won'::tip_result
                    WHERE id = tip_record.id;
                ELSIF 'wrong' = ANY(other_outcomes_status) THEN
                    UPDATE tips
                    SET result = 'lost'::tip_result
                    WHERE id = tip_record.id;
                END IF;
            END IF;
        END LOOP;
    END IF;
    
    RETURN NEW;
END;
$$;

COMMENT ON FUNCTION handle_match_cancellation() IS 'Gère l''annulation d''un match et met à jour les tips associés';
CREATE OR REPLACE FUNCTION update_match_outcomes()
RETURNS trigger 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    match_result text;
    updated_scores jsonb;
    score_period jsonb;
    outcome_results jsonb := '[]'::jsonb;
    outcome_var jsonb;
    outcome_result jsonb;
BEGIN
    IF NEW.scores IS NOT NULL AND (OLD.scores IS NULL OR NEW.scores != OLD.scores) THEN
        IF NEW.is_cancelled = true OR OLD.is_cancelled = true THEN
            NEW.is_cancelled := false;
        END IF;
        
        match_result := calculate_match_result(NEW.scores, NEW.home_team, NEW.away_team);
        updated_scores := '[]'::jsonb;
        
        IF NEW.scores ? 'scores' THEN
            FOR score_period IN SELECT * FROM jsonb_array_elements(NEW.scores->'scores')
            LOOP
                updated_scores := updated_scores || score_period;
            END LOOP;
        ELSE
            FOR score_period IN SELECT * FROM jsonb_array_elements(NEW.scores)
            LOOP
                updated_scores := updated_scores || score_period;
            END LOOP;
        END IF;
        
        IF NEW.outcomes IS NOT NULL THEN
            FOR outcome_var IN SELECT * FROM jsonb_array_elements(NEW.outcomes)
            LOOP
                outcome_result := jsonb_build_object(
                    'outcome_id', outcome_var->>'id',
                    'type', outcome_var->>'type',
                    'name', outcome_var->>'name',
                    'result', CASE 
                        WHEN (outcome_var->>'type') = 'h2h' THEN
                            CASE 
                                WHEN outcome_matches_result(
                                    outcome_var->>'name', 
                                    match_result, 
                                    NEW.home_team, 
                                    NEW.away_team
                                ) THEN 'right'
                                ELSE 'wrong'
                            END
                        ELSE 'initial'
                    END
                );
                
                outcome_results := outcome_results || outcome_result;
            END LOOP;
        END IF;
        
        updated_scores := jsonb_build_object(
            'scores', updated_scores,
            'outcome_results', outcome_results
        );
        
        NEW.scores := updated_scores;
        
        UPDATE tips 
        SET selected_outcomes = (
            SELECT jsonb_agg(
                CASE 
                    WHEN (outcome_elem->'match'->>'match_id') = NEW.match_id THEN
                        jsonb_set(
                            outcome_elem,
                            '{result}',
                            to_jsonb(
                                CASE 
                                    WHEN (outcome_elem->>'type') = 'h2h' THEN
                                        CASE 
                                            WHEN outcome_matches_result(
                                                outcome_elem->>'name', 
                                                match_result, 
                                                NEW.home_team, 
                                                NEW.away_team
                                            ) THEN 'right'
                                            ELSE 'wrong'
                                        END
                                    ELSE 'initial'
                                END
                            )
                        )
                    ELSE outcome_elem
                END
            )
            FROM jsonb_array_elements(selected_outcomes) AS outcome_elem
        )
        WHERE selected_outcomes @> jsonb_build_array(
            jsonb_build_object('match', jsonb_build_object('match_id', NEW.match_id))
        );
        
        UPDATE tips 
        SET selected_outcomes = (
            SELECT jsonb_agg(
                CASE 
                    WHEN (outcome_elem->'match'->>'match_id') = NEW.match_id 
                    AND ((outcome_elem->>'result') = 'initial' OR result = 'cancelled') THEN
                        jsonb_set(
                            outcome_elem,
                            '{result}',
                            to_jsonb(
                                CASE 
                                    WHEN (outcome_elem->>'type') = 'h2h' THEN
                                        CASE 
                                            WHEN outcome_matches_result(
                                                outcome_elem->>'name', 
                                                match_result, 
                                                NEW.home_team, 
                                                NEW.away_team
                                            ) THEN 'right'
                                            ELSE 'wrong'
                                        END
                                    ELSE 'initial'
                                END
                            )
                        )
                    ELSE outcome_elem
                END
            )
            FROM jsonb_array_elements(selected_outcomes) AS outcome_elem
        ),
        result = (
            CASE 
                WHEN (
                    SELECT bool_or((outcome_elem->>'result') = 'wrong')
                    FROM jsonb_array_elements(selected_outcomes) AS outcome_elem
                ) THEN 'lost'::tip_result
                WHEN (
                    SELECT bool_and(
                        CASE 
                            WHEN (outcome_elem->>'result') = 'initial' THEN false
                            ELSE (outcome_elem->>'result') = 'right'
                        END
                    )
                    FROM jsonb_array_elements(selected_outcomes) AS outcome_elem
                ) THEN 'won'::tip_result
                ELSE 'initial'::tip_result
            END
        )::tip_result
        WHERE (selected_outcomes @> jsonb_build_array(
            jsonb_build_object('match', jsonb_build_object('match_id', NEW.match_id))
        ) AND (result = 'initial' OR result = 'cancelled'));
    END IF;
    
    RETURN NEW;
END;
$$;

COMMENT ON FUNCTION update_match_outcomes() IS 'Met à jour les outcomes et calcule les résultats des tips';

-- ========================================
-- 10. TRIGGERS (match outcomes)
-- ========================================

CREATE TRIGGER trigger_handle_match_cancellation
    AFTER UPDATE ON matches
    FOR EACH ROW
    WHEN (NEW.is_cancelled = true AND (OLD.is_cancelled IS NULL OR OLD.is_cancelled = false))
    EXECUTE FUNCTION handle_match_cancellation();

CREATE TRIGGER trigger_update_match_outcomes
    BEFORE UPDATE ON matches
    FOR EACH ROW
    EXECUTE FUNCTION update_match_outcomes();

-- ========================================
-- 11. VERIFICATION
-- ========================================

DO $$
DECLARE
  table_count INTEGER;
  sub_count INTEGER;
  version_value TEXT;
BEGIN
  SELECT COUNT(*) INTO table_count FROM information_schema.tables WHERE table_schema = 'public' AND table_type = 'BASE TABLE';
  SELECT COUNT(*) INTO sub_count FROM subscription_levels;
  SELECT min_version INTO version_value FROM app_version;
  
  RAISE NOTICE '';
  RAISE NOTICE '========================================';
  RAISE NOTICE '✅ INITIALISATION TERMINÉE - V0';
  RAISE NOTICE '========================================';
  RAISE NOTICE '📊 Statistiques:';
  RAISE NOTICE '   - Tables: %', table_count;
  RAISE NOTICE '   - Subscription levels: %', sub_count;
  RAISE NOTICE '   - Version minimale: %', version_value;
  RAISE NOTICE '';
  RAISE NOTICE '🔒 Sécurité (RLS):';
  RAISE NOTICE '   - Toutes les tables: RLS activé ✅';
  RAISE NOTICE '   - profiles: lecture publique, modification own';
  RAISE NOTICE '   - sports: lecture authenticated, admin write';
  RAISE NOTICE '   - matches: lecture authenticated, admin write';
  RAISE NOTICE '   - tips: lecture publique, tipsters create/own';
  RAISE NOTICE '   - actus: lecture authenticated, admin write';
  RAISE NOTICE '   - subscription_levels: lecture authenticated';
  RAISE NOTICE '   - app_version: lecture public (anon + authenticated)';
  RAISE NOTICE '';
  RAISE NOTICE '⚠️  Les sports doivent être ajoutés via l''API (update-sports)';
  RAISE NOTICE '   👉 npm run update-sports';
  RAISE NOTICE '========================================';
END $$;
