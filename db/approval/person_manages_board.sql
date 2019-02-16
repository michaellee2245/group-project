/* Takes a person id and a board id. Returns true if the person is the board's owner or team manager, false otherwise */

SELECT manager_id = $2 OR owner = $2 AS approval FROM team
JOIN board ON board.team = team.id
WHERE board.id = $1;
