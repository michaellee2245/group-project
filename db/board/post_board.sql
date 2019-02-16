/* Post a new board */

INSERT INTO board (
  name,team,owner
) VALUES (
  $1,$2,$3
);
