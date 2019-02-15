/* Post a new direct message */

INSERT INTO message (
  author_id, sendee_id, content
) VALUES (
  $1, $2, $3
);
