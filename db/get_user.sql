/* Get a specific user */

SELECT id, name, email, profile_pic FROM person 
WHERE id = $1;
