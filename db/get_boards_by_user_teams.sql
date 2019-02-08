/* Get all boards that pertain to a specific user's team(s) */

SELECT
  board.id,
  board.name,
  board.description,
  board.team IN (
    SELECT team.id FROM team
    JOIN team_member ON team.id = team_member.team_id
  ) AS public
FROM board
WHERE board.team IN (
  SELECT team.id FROM team
  JOIN team_member ON team_member.team_id = team.id
  WHERE team_member.user_id = $1
) OR board.team IN (
  SELECT team.id FROM team
  WHERE team.manager_id = $1
);
