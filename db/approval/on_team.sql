/* returns true if the user is an approved member of the team */

SELECT approved FROM team_member
WHERE user_id = $1 AND team_id = $2;
