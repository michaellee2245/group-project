/* mark message as read */

UPDATE message
SET read = TRUE
WHERE id = $1;
