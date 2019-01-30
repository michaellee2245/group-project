/* Post a new task */

INSERT INTO task (
  board_id, owner_id, name, position, group_name
) VALUES (
  $1, $2, $3, $4, $5
);
