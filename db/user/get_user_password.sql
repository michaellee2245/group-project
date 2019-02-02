/* Get the salted and hashed password for the bcrypt compare function */

SELECT id, password FROM person
WHERE name = $1;
