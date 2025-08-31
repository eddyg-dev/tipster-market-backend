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
    first_score integer;
    second_score integer;
    scores_array jsonb;
BEGIN
    -- Vérifier si les scores sont dans la nouvelle structure ou l'ancienne
    IF scores ? 'scores' THEN
        -- Nouvelle structure: {scores: [...]}
        scores_array := scores->'scores';
    ELSE
        -- Ancienne structure: [...] directement
        scores_array := scores;
    END IF;
    
    -- Extraire les scores
    first_score := (scores_array->0->>'score')::integer;
    second_score := (scores_array->1->>'score')::integer;
    
    -- Calculer le résultat
    IF first_score > second_score THEN
        RETURN home_team;
    ELSIF second_score > first_score THEN
        RETURN away_team;
    ELSE
        RETURN 'draw';
    END IF;
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
    outcome jsonb;
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
            FOR outcome IN SELECT * FROM jsonb_array_elements(NEW.outcomes)
            LOOP
                outcome_result := jsonb_build_object(
                    'outcome_id', outcome->>'id',
                    'type', outcome->>'type',
                    'name', outcome->>'name',
                    'result', CASE 
                        WHEN (outcome->>'type') = 'h2h' THEN
                            CASE 
                                WHEN (outcome->>'name') = match_result THEN 'right'
                                ELSE 'wrong'
                            END
                        -- Ajouter d'autres types d'outcomes si nécessaire
                        -- WHEN (outcome->>'type') = 'totals' THEN ...
                        -- WHEN (outcome->>'type') = 'spreads' THEN ...
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
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Créer le trigger qui se déclenche avant la mise à jour
DROP TRIGGER IF EXISTS trigger_update_match_outcomes ON matches;
CREATE TRIGGER trigger_update_match_outcomes
    BEFORE UPDATE ON matches
    FOR EACH ROW
    EXECUTE FUNCTION update_match_outcomes();