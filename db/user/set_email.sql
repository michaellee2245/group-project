/* set the user's email */

UPDATE person
SET email = $1
WHERE id = $2;
