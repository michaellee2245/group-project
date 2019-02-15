/* Find users with usernames that start with the given variable */

SELECT id, name, email, profile_pic FROM person
WHERE name ILIKE $1;
