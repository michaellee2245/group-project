/* Get a comprehensive list of all of the teams in the database */

SELECT
  team.id AS id,
  team.name AS name,
  manager.id AS manager_id,
  manager.name AS manager,
  manager.profile_pic AS manager_pic,
  team.organization AS organization
FROM team JOIN person AS manager ON manager.id = team.manager_id;