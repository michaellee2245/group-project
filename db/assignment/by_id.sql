/* Get assignment by ID */

SELECT assigner_id, task_id, user_id FROM assignment
WHERE id = $1;
