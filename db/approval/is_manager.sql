/* Takes a person id and team id and returns true if the
   person is the team's manager, false otherwise. */

SELECT $1 = manager_id AS manager FROM team WHERE id = $2;
