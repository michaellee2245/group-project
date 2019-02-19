/* all assignments the user can access */

SELECT
  assignment.id AS id,
  assignment.task_id AS task_id,
  assignment.user_id AS user_id,
  assignment.assigner_id AS assigner_id,
  assigner.name AS assigner,
  assigner.profile_pic AS assigner_pic,
  task.name AS task,
  task.board_id AS board_id,
  board.team AS team_id,
  team.name AS team,
  board.name AS board
FROM assignment JOIN task ON assignment.task_id = task.id
JOIN person AS assigner ON assignment.assigner_id = assigner.id
JOIN board ON task.board_id = board.id
JOIN team ON board.team = team.id
WHERE team.id IN (
  SELECT id FROM team
  WHERE manager_id = $1

  UNION ALL

  SELECT team_id FROM team_member
  WHERE user_id = $1
  AND approved
);
