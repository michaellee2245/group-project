/* Takes a person id and a board id. Returns true if the person is the board's     manager, false otherwise */

SELECT COUNT(*) > 0 AS manager
FROM team JOIN person AS manager ON manager.id = team.manager_id
JOIN board ON board.team = team.id
WHERE manager.id = $1 AND board.id = $2;
