/* set the status for the task */

UPDATE task
SET status = $2
WHERE id = $1;
