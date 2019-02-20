/* See whether the user is the intended recipient of the message */

SELECT sendee_id = $2 AS approval FROM message
WHERE id = $1;
