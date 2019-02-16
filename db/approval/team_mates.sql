/* Check to see if two users are team mates */

SELECT $1 IN (
  SELECT user_id FROM team_member
  WHERE team_id IN (
    SELECT team_id FROM team_member
    WHERE user_id = $2
    OR team_id IN (
      SELECT id FROM team WHERE manager_id = $2
    )
  )

  UNION ALL

  SELECT manager_id FROM team
  WHERE id IN (
    SELECT team_id FROM team_member
    WHERE user_id = $2
  )
) AS team_mates;
