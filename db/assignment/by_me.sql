/* find the assignment you made */

SELECT id, task_id, user_id FROM assignment
WHERE assigner_id = $1
ORDER BY ts DESC;
