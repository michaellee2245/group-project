/* Get all tasks assigned to members of a specific team */

SELECT
  task.id AS task_id,
  task.name AS task,
  "user".name AS "user",
  assigner.name AS assigner
FROM assignment
JOIN task ON assignment.task_id = task.id
JOIN person AS "user" ON assignment.user_id = "user".id
JOIN person AS assigner ON assignment.assigner_id = assigner.id
JOIN team_member ON team_member.user_id = "user".id
WHERE team_member.team_id = $1;
