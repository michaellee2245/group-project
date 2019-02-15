/* get one team by its id */

SELECT
  team.id,
  team.name,
  manager.id,
  manager.name,
  manager.profile_pic,
  team.organization
FROM team JOIN person AS manager ON manager.id = team.manager_id
WHERE team.id = $1;
