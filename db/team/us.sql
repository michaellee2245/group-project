/* Get all the teams that have both users as approved members: */

SELECT
  team.id AS id,
  team.name AS name,
  manager.id AS manager_id,
  manager.name AS manager,
  manager.profile_pic AS manager_pic,
  team.organization AS organization
FROM team JOIN person AS manager ON manager.id = team.manager_id
WHERE team.id IN (
  SELECT team_id FROM team_member WHERE user_id = $1 AND approved
  UNION ALL
  SELECT id FROM team WHERE manager_id = $1
) AND team.id IN (
  SELECT team_id FROM team_member WHERE user_id = $2 AND approved
  UNION ALL
  SELECT id FROM team WHERE manager_id = $2
);