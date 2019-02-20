/* Get all users from my teams */

SELECT person.id, person.name, email, profile_pic, '' AS manager FROM person
JOIN team_member ON person.id = team_member.user_id
WHERE team_member.team_id IN (
  SELECT team_id FROM team_member WHERE user_id = $1
)

UNION

SELECT person.id, person.name, email, profile_pic, 'manager' AS manager FROM person
JOIN team ON team.manager_id = person.id
WHERE team.id IN (
  SELECT team_id FROM team_member WHERE user_id = $1
)
ORDER BY manager DESC;
