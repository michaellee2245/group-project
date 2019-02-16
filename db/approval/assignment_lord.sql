/* Requires assignment id and a person id.
Returns true if the person is one of the following:
the creator of the assignment
the one assigned
the owner of the task
the owner of the board
the manager of the team */

SELECT
  team.manager_id = $2 OR
  board.owner = $2 OR
  task.owner_id = $2 OR
  assignment.user_id = $2 OR
  assignment.assigner_id = $2 AS approval FROM assignment
JOIN task ON assignment.task_id = task.id
JOIN board ON task.board_id = board.id
JOIN team ON board.team = team.id
WHERE assignment.id = $1;
