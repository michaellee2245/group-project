/* Get the latest task with the given name */
SELECT
  task.id AS id,
  task.board_id AS board_id,
  task.owner_id AS owner_id,
  task.name AS name,
  task.priority AS priority,
  task.status AS status,
  to_char(task.start_date, 'MM/DD/YYYY') AS start_date,
  task.position AS position,
  task.group_name AS group,
  to_char(task.end_date, 'MM/DD/YYYY') AS end_date,
  task.time_est AS time_est,
  to_char(task.ts, 'MM/DD/YYYY HH12:MI AM') AS ts,
  owner.name AS owner,
  owner.profile_pic AS owner_pic,
  board.name AS board_name,
  team.name AS team
FROM task JOIN person AS owner ON owner.id = task.owner_id
JOIN board ON board.id = task.board_id
JOIN team ON board.team = team.id
WHERE task.name = $1
ORDER BY task.ts DESC
LIMIT 1;