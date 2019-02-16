/* set the start date for the task */

UPDATE task
SET start_date = $2
WHERE id = $1;
