-- ========================================
-- FIX: Corriger le trigger pour utiliser match.id au lieu de match.match_id
-- Copiez-collez ce script dans Supabase SQL Editor
-- ========================================

-- Supprimer l'ancien trigger
DROP TRIGGER IF EXISTS trigger_update_match_outcomes ON matches;
DROP TRIGGER IF EXISTS trigger_handle_match_cancellation ON matches;

-- Recréer la fonction update_match_outcomes avec le bon champ
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
        
        -- CORRECTION : Utiliser match.id au lieu de match.match_id
        UPDATE tips 
        SET selected_outcomes = (
            SELECT jsonb_agg(
                CASE 
                    WHEN (outcome_elem->'match'->>'id')::uuid = NEW.id THEN
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
        WHERE EXISTS (
            SELECT 1 
            FROM jsonb_array_elements(selected_outcomes) AS oc
            WHERE (oc->'match'->>'id')::uuid = NEW.id
        );
        
        UPDATE tips 
        SET selected_outcomes = (
            SELECT jsonb_agg(
                CASE 
                    WHEN (outcome_elem->'match'->>'id')::uuid = NEW.id
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
            SELECT CASE 
                WHEN bool_and(outcome_elem->>'result' = 'right') THEN 'won'::tip_result
                WHEN bool_or(outcome_elem->>'result' = 'wrong') THEN 'lost'::tip_result
                ELSE 'initial'::tip_result
            END
            FROM jsonb_array_elements(selected_outcomes) AS outcome_elem
        )::tip_result
        WHERE EXISTS (
            SELECT 1 
            FROM jsonb_array_elements(selected_outcomes) AS oc
            WHERE (oc->'match'->>'id')::uuid = NEW.id
        ) 
        AND (result = 'initial' OR result = 'cancelled');
    END IF;
    
    RETURN NEW;
END;
$$;

-- Recréer la fonction handle_match_cancellation avec le bon champ
CREATE OR REPLACE FUNCTION handle_match_cancellation()
RETURNS trigger 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    tip_record RECORD;
    outcomes_count integer;
    other_outcomes_status text[];
    all_others_right boolean;
BEGIN
    IF NEW.is_cancelled = true AND (OLD.is_cancelled IS NULL OR OLD.is_cancelled = false) THEN
        -- CORRECTION : Utiliser match.id au lieu de match.match_id
        FOR tip_record IN (
            SELECT id, selected_outcomes 
            FROM tips
            WHERE EXISTS (
                SELECT 1 
                FROM jsonb_array_elements(selected_outcomes) AS oc
                WHERE (oc->'match'->>'id')::uuid = NEW.id
            )
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
                WHERE (outcome_elem->'match'->>'id')::uuid != NEW.id;
                
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

-- Recréer les triggers
CREATE TRIGGER trigger_handle_match_cancellation
    AFTER UPDATE ON matches
    FOR EACH ROW
    WHEN (NEW.is_cancelled = true AND (OLD.is_cancelled IS NULL OR OLD.is_cancelled = false))
    EXECUTE FUNCTION handle_match_cancellation();

CREATE TRIGGER trigger_update_match_outcomes
    BEFORE UPDATE ON matches
    FOR EACH ROW
    EXECUTE FUNCTION update_match_outcomes();

-- Vérification
SELECT 'Triggers recréés avec succès !' as message;
