/* Get a list of the task ids for all tasks a user is allowed to access */

SELECT id FROM task
WHERE owner_id = $1
OR id IN (
  SELECT task_id FROM assignment
  WHERE user_id = $1
  OR assigner_id = $1
) OR board_id IN (
  SELECT board_id FROM task
  JOIN assignment ON task.id = task_id
  WHERE user_id = $1
  OR assigner_id = $1
);