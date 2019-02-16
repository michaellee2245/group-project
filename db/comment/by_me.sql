/* Get all the comments authored by the user */

SELECT id, task_id, content, ts FROM comment
WHERE author_id = $1
ORDER BY ts DESC;
