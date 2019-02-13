/* change the content of a message */

UPDATE message
SET content = $2
WHERE id = $1;
