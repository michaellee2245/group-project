/* set the user's profile_pic field */

UPDATE person
SET profile_pic = $1
WHERE id = $2;
