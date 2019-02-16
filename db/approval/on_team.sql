/* returns true if the user is an approved member or manager of the team */

SELECT manager_id = $1 OR (
  SELECT approved FROM team_member
  WHERE team_id = $2 AND user_id = $1
) AS approved FROM team WHERE id = $2;
