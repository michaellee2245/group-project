/* see whether the user is either sender or recipient of message */

SELECT sendee_id = $2 OR author_id = $2 AS approval FROM message
WHERE id = $1;
