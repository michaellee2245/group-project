/* see if the user sent the message */

SELECT author_id = $2 AS approval FROM message
WHERE id = $1;
