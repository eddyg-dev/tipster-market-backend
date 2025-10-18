-- Fonction pour mettre à jour plusieurs matchs avec leurs scores en une seule requête
CREATE OR REPLACE FUNCTION update_multiple_match_scores(match_updates jsonb)
RETURNS jsonb AS $$
DECLARE
    update_record record;
    result jsonb := '[]'::jsonb;
    match_data jsonb;
BEGIN
    -- Parcourir chaque mise à jour de match
    FOR update_record IN SELECT * FROM jsonb_array_elements(match_updates)
    LOOP
        -- Mettre à jour le match avec son score
        UPDATE matches 
        SET scores = (update_record->>'scores')::jsonb
        WHERE match_id = update_record->>'match_id';
        
        -- Récupérer les données du match mis à jour
        SELECT to_jsonb(matches.*) INTO match_data
        FROM matches 
        WHERE match_id = update_record->>'match_id';
        
        -- Ajouter le résultat à la réponse
        result := result || match_data;
    END LOOP;
    
    RETURN result;
END;
$$ LANGUAGE plpgsql;

-- Fonction alternative plus simple pour mettre à jour les scores uniquement
CREATE OR REPLACE FUNCTION update_match_scores_bulk(match_updates jsonb)
RETURNS integer AS $$
DECLARE
    update_record record;
    updated_count integer := 0;
BEGIN
    -- Parcourir chaque mise à jour de match
    FOR update_record IN SELECT * FROM jsonb_array_elements(match_updates)
    LOOP
        -- Mettre à jour le match avec son score
        UPDATE matches 
        SET scores = (update_record->>'scores')::jsonb
        WHERE match_id = update_record->>'match_id';
        
        -- Compter les lignes mises à jour
        IF FOUND THEN
            updated_count := updated_count + 1;
        END IF;
    END LOOP;
    
    RETURN updated_count;
END;
$$ LANGUAGE plpgsql;

-- Fonction pour calculer le résultat d'un match basé sur les scores
CREATE OR REPLACE FUNCTION calculate_match_result(scores jsonb, home_team text, away_team text)
RETURNS text AS $$
DECLARE
    home_score integer;
    away_score integer;
    scores_array jsonb;
    score_item jsonb;
BEGIN
    -- Vérifier si les scores sont dans la nouvelle structure ou l'ancienne
    IF scores ? 'scores' THEN
        -- Nouvelle structure: {scores: [...]}
        scores_array := scores->'scores';
    ELSE
        -- Ancienne structure: [...] directement
        scores_array := scores;
    END IF;
    
    -- Initialiser les scores
    home_score := 0;
    away_score := 0;
    
    -- Parcourir les scores pour trouver les scores des équipes
    FOR score_item IN SELECT * FROM jsonb_array_elements(scores_array)
    LOOP
        -- Vérifier si c'est l'équipe à domicile
        IF normalize_outcome_name(score_item->>'name') = normalize_outcome_name(home_team) THEN
            home_score := (score_item->>'score')::integer;
        -- Vérifier si c'est l'équipe à l'extérieur
        ELSIF normalize_outcome_name(score_item->>'name') = normalize_outcome_name(away_team) THEN
            away_score := (score_item->>'score')::integer;
        END IF;
    END LOOP;
    
    -- Calculer le résultat
    IF home_score > away_score THEN
        RETURN home_team;
    ELSIF away_score > home_score THEN
        RETURN away_team;
    ELSE
        RETURN 'draw';
    END IF;
END;
$$ LANGUAGE plpgsql;

-- Fonction pour normaliser les noms d'outcomes
CREATE OR REPLACE FUNCTION normalize_outcome_name(outcome_name text)
RETURNS text AS $$
BEGIN
    -- Normaliser les noms d'outcomes pour la comparaison
    -- Les outcomes ont des noms comme "Paris Saint-Germain", "Draw", "Real Madrid"
    RETURN LOWER(TRIM(outcome_name));
END;
$$ LANGUAGE plpgsql;

-- Fonction pour vérifier si un outcome correspond au résultat du match
CREATE OR REPLACE FUNCTION outcome_matches_result(outcome_name text, match_result text, home_team text, away_team text)
RETURNS boolean AS $$
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
    
    -- Vérifier les correspondances directes
    IF normalized_outcome = normalized_result THEN
        RETURN true;
    END IF;
    
    -- Vérifier les correspondances pour les matchs nuls
    IF match_result = 'draw' THEN
        RETURN normalized_outcome IN ('draw', 'nul', 'match nul', 'égalité', 'tie', 'x');
    END IF;
    
    -- Vérifier les correspondances pour l'équipe à domicile
    IF match_result = home_team THEN
        RETURN normalized_outcome IN (
            normalized_home_team,
            '1', 'home', 'domicile', 'local'
        ) OR normalized_outcome LIKE '%' || normalized_home_team || '%';
    END IF;
    
    -- Vérifier les correspondances pour l'équipe à l'extérieur
    IF match_result = away_team THEN
        RETURN normalized_outcome IN (
            normalized_away_team,
            '2', 'away', 'extérieur', 'visiteur'
        ) OR normalized_outcome LIKE '%' || normalized_away_team || '%';
    END IF;
    
    RETURN false;
END;
$$ LANGUAGE plpgsql;

-- Fonction pour mettre à jour les scores avec les résultats des outcomes
CREATE OR REPLACE FUNCTION update_match_outcomes()
RETURNS trigger AS $$
DECLARE
    match_result text;
    updated_scores jsonb;
    score_period jsonb;
    outcome_results jsonb := '[]'::jsonb;
    outcome_var jsonb;
    outcome_result jsonb;
BEGIN
    -- Vérifier si les scores ont été mis à jour
    IF NEW.scores IS NOT NULL AND (OLD.scores IS NULL OR NEW.scores != OLD.scores) THEN
        -- Calculer le résultat du match
        match_result := calculate_match_result(NEW.scores, NEW.home_team, NEW.away_team);
        
        -- Initialiser les scores mis à jour avec les scores existants
        updated_scores := '[]'::jsonb;
        
        -- Déterminer la structure des scores
        IF NEW.scores ? 'scores' THEN
            -- Nouvelle structure: copier les scores depuis scores.scores
            FOR score_period IN SELECT * FROM jsonb_array_elements(NEW.scores->'scores')
            LOOP
                updated_scores := updated_scores || score_period;
            END LOOP;
        ELSE
            -- Ancienne structure: copier directement
            FOR score_period IN SELECT * FROM jsonb_array_elements(NEW.scores)
            LOOP
                updated_scores := updated_scores || score_period;
            END LOOP;
        END IF;
        
        -- Calculer les résultats des outcomes seulement s'ils existent
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
                        -- Ajouter d'autres types d'outcomes si nécessaire
                        -- WHEN (outcome_var->>'type') = 'totals' THEN ...
                        -- WHEN (outcome_var->>'type') = 'spreads' THEN ...
                        ELSE 'initial'
                    END
                );
                
                outcome_results := outcome_results || outcome_result;
            END LOOP;
        END IF;
        
        -- Ajouter les résultats des outcomes au JSON des scores
        updated_scores := jsonb_build_object(
            'scores', updated_scores,
            'outcome_results', outcome_results
        );
        
        -- Mettre à jour les scores avec les résultats des outcomes
        NEW.scores := updated_scores;
        
        -- Mettre à jour les outcomes des tips qui contiennent ce match
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
        
        -- Mettre à jour aussi tous les tips existants qui ont des outcomes "initial" pour ce match
        UPDATE tips 
        SET selected_outcomes = (
            SELECT jsonb_agg(
                CASE 
                    WHEN (outcome_elem->'match'->>'match_id') = NEW.match_id 
                    AND (outcome_elem->>'result') = 'initial' THEN
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
            -- Calculer le résultat global du tip
            CASE 
                -- Si au moins un outcome est perdu, le tip est perdu
                WHEN (
                    SELECT bool_or((outcome_elem->>'result') = 'wrong')
                    FROM jsonb_array_elements(selected_outcomes) AS outcome_elem
                ) THEN 'lost'::tip_result
                -- Si tous les outcomes sont gagnés, le tip est gagné
                WHEN (
                    SELECT bool_and(
                        CASE 
                            WHEN (outcome_elem->>'result') = 'initial' THEN false
                            ELSE (outcome_elem->>'result') = 'right'
                        END
                    )
                    FROM jsonb_array_elements(selected_outcomes) AS outcome_elem
                ) THEN 'won'::tip_result
                -- Sinon, le tip reste initial
                ELSE 'initial'::tip_result
            END
        )::tip_result
        WHERE selected_outcomes @> jsonb_build_array(
            jsonb_build_object('match', jsonb_build_object('match_id', NEW.match_id))
        );
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


-- Fonction pour forcer la mise à jour des tips existants
CREATE OR REPLACE FUNCTION force_update_tip_outcomes()
RETURNS void AS $$
DECLARE
    match_record RECORD;
    match_result TEXT;
BEGIN
    -- Parcourir tous les matches qui ont des scores
    FOR match_record IN 
        SELECT match_id, home_team, away_team, scores
        FROM matches 
        WHERE scores IS NOT NULL 
        AND scores != 'null'::jsonb
        AND scores != '{}'::jsonb
    LOOP
        -- Calculer le résultat du match
        match_result := calculate_match_result(match_record.scores, match_record.home_team, match_record.away_team);
        
        -- Mettre à jour tous les tips qui ont des outcomes "initial" pour ce match
        UPDATE tips 
        SET selected_outcomes = (
            SELECT jsonb_agg(
                CASE 
                    WHEN (outcome_elem->'match'->>'match_id') = match_record.match_id 
                    AND (outcome_elem->>'result') = 'initial' THEN
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
                                                match_record.home_team, 
                                                match_record.away_team
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
            -- Calculer le résultat global du tip
            CASE 
                -- Si au moins un outcome est perdu, le tip est perdu
                WHEN (
                    SELECT bool_or((outcome_elem->>'result') = 'wrong')
                    FROM jsonb_array_elements(selected_outcomes) AS outcome_elem
                ) THEN 'lost'::tip_result
                -- Si tous les outcomes sont gagnés, le tip est gagné
                WHEN (
                    SELECT bool_and(
                        CASE 
                            WHEN (outcome_elem->>'result') = 'initial' THEN false
                            ELSE (outcome_elem->>'result') = 'right'
                        END
                    )
                    FROM jsonb_array_elements(selected_outcomes) AS outcome_elem
                ) THEN 'won'::tip_result
                -- Sinon, le tip reste initial
                ELSE 'initial'::tip_result
            END
        )::tip_result
        WHERE selected_outcomes @> jsonb_build_array(
            jsonb_build_object('match', jsonb_build_object('match_id', match_record.match_id))
        );
    END LOOP;
END;
$$ LANGUAGE plpgsql;

-- Exécuter la fonction pour corriger les tips existants
SELECT force_update_tip_outcomes();

-- Créer le trigger qui se déclenche avant la mise à jour
DROP TRIGGER IF EXISTS trigger_update_match_outcomes ON matches;
CREATE TRIGGER trigger_update_match_outcomes
    BEFORE UPDATE ON matches
    FOR EACH ROW
    EXECUTE FUNCTION update_match_outcomes();