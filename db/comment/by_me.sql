/* Get all the comments authored by the user */
SELECT
  comment.id AS id,
  comment.task_id AS task_id,
  comment.author_id AS author_id,
  author.name AS author,
  author.profile_pic AS author_pic,
  comment.content AS content,
  to_char(comment.ts,'MM/DD/YYYY HH12:MI AM') AS time_posted
FROM comment JOIN person AS author ON comment.author_id = author.id
WHERE author_id = $1
ORDER BY ts DESC;