/* remove yourself from the team roster */

DELETE FROM team_member
WHERE user_id = $1 AND team_id = $2;
