/* Get info on a specific task */

SELECT
  task.id,
  task.name AS task,
  task.group_name,
  owner.name AS owner,
  board.name AS board,
  task.priority,
  task.status,
  task.start_date,
  task.end_date,
  task.position,
  (SELECT COUNT(*) FROM assignment WHERE task_id = $1) AS assigned_users,
  (SELECT COUNT(*) FROM comment WHERE task_id = $1) AS comments
FROM task
JOIN person AS owner ON task.owner_id = owner.id
JOIN board ON task.board_id = board.id
WHERE task.id = $1;
