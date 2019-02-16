/* set the time estimate for the task */

UPDATE task
SET time_est = $2
WHERE id = $1;
