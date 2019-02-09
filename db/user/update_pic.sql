/* takes user id and pic url and updates the profile_pic field */

UPDATE person
SET profile_pic = $2
WHERE id = $1;
