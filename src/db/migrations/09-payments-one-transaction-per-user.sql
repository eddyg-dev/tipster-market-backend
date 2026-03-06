-- ========================================
-- 9. Un abonnement (transaction store) = un seul compte app
-- ========================================
-- On garde une seule ligne par transaction_id (le premier enregistré).
-- Puis on ajoute une contrainte UNIQUE(transaction_id) pour empêcher
-- qu'un même achat Google/Apple soit lié à plusieurs comptes Prono d'Or.

-- Supprimer les doublons : garder une seule ligne par transaction_id (la plus ancienne)
DELETE FROM payments a
USING payments b
WHERE a.transaction_id = b.transaction_id
  AND a.created_at > b.created_at;

-- Une transaction store ne peut être liée qu'à un seul user_id
ALTER TABLE payments
  ADD CONSTRAINT payments_transaction_id_unique UNIQUE (transaction_id);

COMMENT ON CONSTRAINT payments_transaction_id_unique ON payments IS
  'Un même achat (Google Play / App Store) ne peut être lié qu''à un seul compte Prono d''Or';
