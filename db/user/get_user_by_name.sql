/* Check to see whether a username has been registered previously */

SELECT COUNT(*) FROM person
WHERE name = $1;
