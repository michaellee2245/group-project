SELECT COUNT(*) > 0 AS approved FROM board
JOIN team ON team.id = board.team
JOIN team_member ON team_member.team_id = team.id
WHERE team_member.user_id = $1
AND board.id = $2
AND team_member.approved;
