/* set the user's skype field */

UPDATE person
SET skype = $1
WHERE id = $2;
