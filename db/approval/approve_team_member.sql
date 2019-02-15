/* managers can approve requests to join their teams */
/* first parameter is user id, second is team id */

UPDATE team_member
SET approved = TRUE
WHERE user_id = $1
AND team_id = $2;
