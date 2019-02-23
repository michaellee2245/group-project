/* Get all users from my teams */
SELECT
  person.id AS id,
  person.name AS name,
  person.email AS email,
  person.profile_pic AS pic,
  person.title AS title,
  person.skype AS skype,
  person.phone AS phone,
  person.location AS location,
  '' AS manager
FROM person JOIN team_member ON person.id = team_member.user_id
WHERE team_member.team_id IN (
  SELECT team_id FROM team_member WHERE user_id = $1
)
UNION
SELECT
  person.id AS id,
  person.name AS name,
  person.email AS email,
  person.profile_pic AS pic,
  person.title AS title,
  person.skype AS skype,
  person.phone AS phone,
  person.location AS location,
  'manager' AS manager
FROM person JOIN team ON team.manager_id = person.id
WHERE team.id IN (
  SELECT team_id FROM team_member WHERE user_id = $1
)
ORDER BY manager DESC;