/* Get all users assigned to a specific task */

SELECT
  assignment.id,
  assigner.name AS assigner,
  u.name AS "user",
  task.name AS task
FROM assignment
JOIN task ON task.id = assignment.task_id
JOIN person AS assigner ON assigner.id = assignment.assigner_id
JOIN person AS u ON u.id = assignment.user_id
WHERE task.id = $1;
