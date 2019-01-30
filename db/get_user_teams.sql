/* Get all a specific user's teams */

SELECT team.id, team.name, '' AS manager FROM team
JOIN team_member ON team.id = team_member.team_id
WHERE team_member.user_id = $1

UNION

SELECT id, name, 'manager' AS manager FROM team
WHERE manager_id = $1
ORDER BY manager DESC;
