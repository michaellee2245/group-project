/* Find teams from organizations that start with the given variable */
/* Please note that the variable must end in '%' to get the desired effect */

SELECT
  team.id AS id,
  team.name AS name,
  manager.id AS manager_id,
  manager.name AS manager,
  manager.profile_pic AS manager_pic,
  team.organization AS organization
FROM team JOIN person AS manager ON manager.id = team.manager_id
WHERE team.organization ILIKE $1;
