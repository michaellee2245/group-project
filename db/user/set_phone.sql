/* set the user's phone field */

UPDATE person
SET phone = $1
WHERE id = $2;
