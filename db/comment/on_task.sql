/* Get all of the comments that belong to the indicated task */

SELECT
  comment.id AS id,
  comment.task_id AS task_id,
  comment.author_id AS author_id,
  author.name AS author,
  author.profile_pic AS author_pic,
  comment.content AS content,
  comment.ts AS time_posted
FROM comment JOIN person AS author ON comment.author_id = author.id
WHERE comment.task_id = $1;
