/* Takes a comment id and a person id.
Returns true if the person is one of the following:
the author of the comment
the owner of the task
the owner of the board
the manager of the team */

SELECT
  team.manager_id = $2 OR
  board.owner = $2 OR
  task.owner_id = $2 OR
  comment.author_id = $2 AS approval FROM comment
JOIN task ON comment.task_id = task.id
JOIN board ON task.board_id = board.id
JOIN team ON board.team = team.id
WHERE comment.id = $1;
