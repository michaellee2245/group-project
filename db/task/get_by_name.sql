/* Get the latest task with the given name */

SELECT
  id,
  board_id,
  owner_id,
  name,
  priority,
  status,
  start_date,
  position,
  group_name,
  end_date,
  time_est,
  ts
FROM task
WHERE name = $1
ORDER BY ts DESC
LIMIT 1;
