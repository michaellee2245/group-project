/* set the priority for the task */

UPDATE task
SET priority = $2
WHERE id = $1;
