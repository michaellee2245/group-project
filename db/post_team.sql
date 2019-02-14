/* Post a new team */

INSERT INTO team (
  name, manager_id
) VALUES (
  $1, $2
);
