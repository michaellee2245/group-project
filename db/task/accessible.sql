/* Get all of the tasks that a user has access to as an approved team member*/

SELECT
  task.id AS id,
  task.board_id AS board_id,
  task.owner_id AS owner_id,
  task.name AS name,
  task.priority AS priority,
  task.status AS status,
  task.start_date AS start_date,
  task.position AS position,
  task.group_name AS group,
  task.end_date AS end_date,
  task.time_est AS time_est,
  task.ts AS ts,
  board.name AS board_name,
  owner.name AS owner,
  owner.profile_pic AS owner_pic,
  team.name AS team
FROM task JOIN board ON board.id = task.board_id
JOIN person AS owner ON owner.id = task.owner_id
JOIN team ON board.team = team.id
WHERE team.id IN (
  SELECT team_id FROM team_member
  WHERE user_id = $1 AND approved

  UNION ALL

  SELECT id FROM team
  WHERE manager_id = $1
);
