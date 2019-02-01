/* Get all comments authored by a specific user */

SELECT id, content, ts FROM comment
WHERE author_id = $1;
