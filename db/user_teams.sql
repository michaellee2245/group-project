/* Get all a specific user's teams */

SELECT team.id, team.name, '' AS manager FROM team
JOIN team_member ON team.id = team_member.team_id
JOIN person ON person.id = team_member.user_id
WHERE person.id = $1

UNION

SELECT team.id, team.name, 'manager' AS manager FROM team
JOIN person ON person.id = team.manager_id
WHERE person.id = $1
ORDER BY manager DESC;
