/* Get all users who belong to a specific team */

SELECT person.id, person.name FROM person
JOIN team_member ON team_member.user_id = person.id
WHERE team_member.team_id = $1;
