/* set the end date for the task */

UPDATE task
SET end_date = $2
WHERE id = $1;
