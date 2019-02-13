/* Get a comprehensive list of all of the teams in the database */

SELECT
  team.id,
  team.name,
  manager.id,
  manager.name,
  manager.profile_pic,
  team.organization
FROM team JOIN person AS manager ON manager.id = team.manager_id;