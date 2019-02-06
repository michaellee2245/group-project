/* Get all the comments on a task */

SELECT content, ts, author.name FROM comment
JOIN person AS author ON author.id = comment.author_id
WHERE task_id = $1;
