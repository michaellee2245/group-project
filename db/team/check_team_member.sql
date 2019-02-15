/* find a member by user id and team id */

SELECT * FROM team_member WHERE user_id = $1 AND team_id = $2;