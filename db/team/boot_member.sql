/* remove a team member from the team's roster */

DELETE FROM team_member
WHERE team_id = $1 AND user_id = $2;
