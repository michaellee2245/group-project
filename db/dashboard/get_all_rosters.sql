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
  '' AS manager,
  team_member.team_id AS team_id,
  team.name AS team_name,
  TRUE AS approved
FROM person JOIN team_member ON person.id = team_member.user_id
JOIN team ON team.id = team_member.team_id
WHERE team_member.team_id IN (
  SELECT team_id FROM team_member WHERE user_id = $1
) AND team_member.approved
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
  'manager' AS manager,
  team.id AS team_id,
  team.name AS team_name,
  TRUE AS approved
FROM person JOIN team ON team.manager_id = person.id
WHERE team.id IN (
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
  '' AS manager,
  team_member.team_id AS team_id,
  team.name AS team_name,
  team_member.approved AS approved
FROM person JOIN team_member ON team_member.user_id = person.id
JOIN team ON team_member.team_id = team.id
WHERE team.manager_id = $1
ORDER BY team_name;
