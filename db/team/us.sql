/* Get all the teams that have both users as approved members: */

SELECT
  team.id,
  team.name,
  manager.id,
  manager.name,
  manager.profile_pic,
  team.organization
FROM team JOIN person AS manager ON manager.id = team.manager_id
WHERE team.id IN (
  SELECT team_id FROM team_member WHERE user_id = $1 AND approved
) AND team.id IN (
  SELECT team_id FROM team_member WHERE user_id = $2 AND approved
);