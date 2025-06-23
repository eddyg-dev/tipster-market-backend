-- Script pour ajouter des données de test pour les matches
-- À exécuter après init.sql

-- Supprimer les données existantes
DELETE FROM odds;
DELETE FROM matches;

-- Insérer des matches de test
INSERT INTO matches (home_team, away_team, date, sport_key) VALUES
  ('PSG', 'OM', now() + interval '2 hours', 'soccer_france_ligue_one'),
  ('Lyon', 'Monaco', now() + interval '4 hours', 'soccer_france_ligue_one'),
  ('Marseille', 'Nice', now() + interval '6 hours', 'soccer_france_ligue_one'),
  ('Lille', 'Lens', now() + interval '8 hours', 'soccer_france_ligue_one'),
  ('Arsenal', 'Chelsea', now() + interval '3 hours', 'soccer_england_premier_league'),
  ('Manchester United', 'Liverpool', now() + interval '5 hours', 'soccer_england_premier_league'),
  ('Barcelona', 'Real Madrid', now() + interval '7 hours', 'soccer_spain_la_liga'),
  ('Bayern Munich', 'Dortmund', now() + interval '9 hours', 'soccer_germany_bundesliga');

-- Insérer des cotes pour PSG vs OM
INSERT INTO odds (match_id, libelle, value, type) VALUES
  ((SELECT id FROM matches WHERE home_team = 'PSG' AND away_team = 'OM'), 'PSG', 1.85, 'h2h'),
  ((SELECT id FROM matches WHERE home_team = 'PSG' AND away_team = 'OM'), 'Nul', 3.40, 'h2h'),
  ((SELECT id FROM matches WHERE home_team = 'PSG' AND away_team = 'OM'), 'OM', 4.20, 'h2h');

-- Insérer des cotes pour Lyon vs Monaco
INSERT INTO odds (match_id, libelle, value, type) VALUES
  ((SELECT id FROM matches WHERE home_team = 'Lyon' AND away_team = 'Monaco'), 'Lyon', 2.10, 'h2h'),
  ((SELECT id FROM matches WHERE home_team = 'Lyon' AND away_team = 'Monaco'), 'Nul', 3.20, 'h2h'),
  ((SELECT id FROM matches WHERE home_team = 'Lyon' AND away_team = 'Monaco'), 'Monaco', 3.50, 'h2h');

-- Insérer des cotes pour Marseille vs Nice
INSERT INTO odds (match_id, libelle, value, type) VALUES
  ((SELECT id FROM matches WHERE home_team = 'Marseille' AND away_team = 'Nice'), 'Marseille', 1.95, 'h2h'),
  ((SELECT id FROM matches WHERE home_team = 'Marseille' AND away_team = 'Nice'), 'Nul', 3.30, 'h2h'),
  ((SELECT id FROM matches WHERE home_team = 'Marseille' AND away_team = 'Nice'), 'Nice', 3.80, 'h2h');

-- Insérer des cotes pour Lille vs Lens
INSERT INTO odds (match_id, libelle, value, type) VALUES
  ((SELECT id FROM matches WHERE home_team = 'Lille' AND away_team = 'Lens'), 'Lille', 2.25, 'h2h'),
  ((SELECT id FROM matches WHERE home_team = 'Lille' AND away_team = 'Lens'), 'Nul', 3.10, 'h2h'),
  ((SELECT id FROM matches WHERE home_team = 'Lille' AND away_team = 'Lens'), 'Lens', 3.20, 'h2h');

-- Insérer des cotes pour Arsenal vs Chelsea
INSERT INTO odds (match_id, libelle, value, type) VALUES
  ((SELECT id FROM matches WHERE home_team = 'Arsenal' AND away_team = 'Chelsea'), 'Arsenal', 1.75, 'h2h'),
  ((SELECT id FROM matches WHERE home_team = 'Arsenal' AND away_team = 'Chelsea'), 'Nul', 3.60, 'h2h'),
  ((SELECT id FROM matches WHERE home_team = 'Arsenal' AND away_team = 'Chelsea'), 'Chelsea', 4.50, 'h2h');

-- Insérer des cotes pour Manchester United vs Liverpool
INSERT INTO odds (match_id, libelle, value, type) VALUES
  ((SELECT id FROM matches WHERE home_team = 'Manchester United' AND away_team = 'Liverpool'), 'Manchester United', 2.80, 'h2h'),
  ((SELECT id FROM matches WHERE home_team = 'Manchester United' AND away_team = 'Liverpool'), 'Nul', 3.40, 'h2h'),
  ((SELECT id FROM matches WHERE home_team = 'Manchester United' AND away_team = 'Liverpool'), 'Liverpool', 2.40, 'h2h');

-- Insérer des cotes pour Barcelona vs Real Madrid
INSERT INTO odds (match_id, libelle, value, type) VALUES
  ((SELECT id FROM matches WHERE home_team = 'Barcelona' AND away_team = 'Real Madrid'), 'Barcelona', 2.15, 'h2h'),
  ((SELECT id FROM matches WHERE home_team = 'Barcelona' AND away_team = 'Real Madrid'), 'Nul', 3.25, 'h2h'),
  ((SELECT id FROM matches WHERE home_team = 'Barcelona' AND away_team = 'Real Madrid'), 'Real Madrid', 3.30, 'h2h');

-- Insérer des cotes pour Bayern Munich vs Dortmund
INSERT INTO odds (match_id, libelle, value, type) VALUES
  ((SELECT id FROM matches WHERE home_team = 'Bayern Munich' AND away_team = 'Dortmund'), 'Bayern Munich', 1.65, 'h2h'),
  ((SELECT id FROM matches WHERE home_team = 'Bayern Munich' AND away_team = 'Dortmund'), 'Nul', 3.80, 'h2h'),
  ((SELECT id FROM matches WHERE home_team = 'Bayern Munich' AND away_team = 'Dortmund'), 'Dortmund', 4.80, 'h2h');

-- Afficher le nombre de matches et cotes créés
SELECT 
  'Matches créés:' as info,
  COUNT(*) as count 
FROM matches
UNION ALL
SELECT 
  'Cotes créées:' as info,
  COUNT(*) as count 
FROM odds; 