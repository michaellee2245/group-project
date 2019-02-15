/* set the user's location field */

UPDATE person
SET location = $1
WHERE id = $2;
