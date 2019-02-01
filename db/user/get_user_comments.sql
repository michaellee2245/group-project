/* Get all comments authored by a specific user */

SELECT * FROM comment
WHERE author_id = $1;
