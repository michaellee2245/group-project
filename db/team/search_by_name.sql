/* Find teams with names that start with the given variable */
/* Please note that the variable must end in '%' to get the desired effect */

SELECT
  team.id,
  team.name,
  manager.id,
  manager.name,
  manager.profile_pic,
  team.organization
FROM team JOIN person AS manager ON manager.id = team.manager_id
WHERE team.name ILIKE $1;
