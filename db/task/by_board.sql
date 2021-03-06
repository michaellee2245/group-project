/* Get all tasks on a specific board */
SELECT
  task.time_est AS time_est,
  task.id,
  task.name AS name,
  task.group_name,
  owner.name AS owner,
  board.name AS board_name,
  task.priority,
  task.status,
  to_char(task.start_date, 'MM/DD/YYYY') AS start_date,
  to_char(task.end_date, 'MM/DD/YYYY') AS end_date,
  task.position,
  (SELECT COUNT(*) FROM assignment WHERE task_id = task.id) AS assigned_users,
  (SELECT COUNT(*) FROM comment WHERE task_id = task.id) AS comments
FROM task
JOIN person AS owner ON task.owner_id = owner.id
JOIN board ON task.board_id = board.id
WHERE board.id = $1;