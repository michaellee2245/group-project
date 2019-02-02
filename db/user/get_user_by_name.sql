/* Check to see whether a username has been registered previously */

SELECT id, name, email, profile_pic FROM person
WHERE name = $1;
