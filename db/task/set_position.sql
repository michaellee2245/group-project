/* set the position for the task */

UPDATE task
SET position = $2
WHERE id = $1;
