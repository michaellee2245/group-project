/* Assign a task to a user */

INSERT INTO assignment (
  task_id, user_id, assigner_id
) VALUES (
  $1, $2, $3
);
