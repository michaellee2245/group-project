/* Takes a person id and a task id. Returns true if the person is the task's owner or board's owner or team manager, false otherwise */

SELECT manager_id = $2 OR owner = $2 OR owner_id = $2 AS approval FROM team
JOIN board ON board.team = team.id
JOIN task ON task.board_id = board.id
WHERE task.id = $1;