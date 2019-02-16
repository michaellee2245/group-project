/* set the user's title field */

UPDATE person
SET title = $1
WHERE id = $2;
