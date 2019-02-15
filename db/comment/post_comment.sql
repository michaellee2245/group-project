/* Post a new comment */

INSERT INTO comment (
  task_id, author_id, content
) VALUES (
  $1, $2, $3
);
