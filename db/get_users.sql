/* Get all users belonging to a specific team */

SELECT person.id, person.name, email, profile_pic, '' AS manager FROM person 
JOIN team_member ON person.id = team_member.user_id
WHERE team_member.team_id = $1

UNION

SELECT person.id, person.name, email, profile_pic, 'manager' AS manager FROM person 
JOIN team ON team.manager_id = person.id
WHERE team.id = $1
ORDER BY manager DESC;
