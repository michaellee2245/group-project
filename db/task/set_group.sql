/* set the group for the task */

UPDATE task
SET group_name = $2
WHERE id = $1;
