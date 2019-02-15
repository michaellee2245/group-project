/* delete the message */

DELETE FROM message
WHERE id = $1;
