/* Get the tasks that pertain to a particular team... */

SELECT
  task.id AS id,
  task.name AS name,
  task.group_name AS group,
  task.priority AS priority,
  task.status AS status,
  task.start_date AS start_date,
  task.end_date AS end_date,
  task.time_est AS time_est,
  task.position AS position,
  board.name AS board,
  board.id AS board_id,
  owner.name AS owner,
  owner.id AS owner_id,
  owner.profile_pic AS owner_pic
FROM task
JOIN board ON task.board_id = board.id
JOIN person AS owner ON owner.id = task.owner_id
WHERE board.team = $1;
