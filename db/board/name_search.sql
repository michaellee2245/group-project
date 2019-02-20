/* find boards that you can access with names that start with the search term */

SELECT
  board.id AS id,
  board.name AS name,
  board.description AS description,
  board.team AS team_id,
  board.owner AS owner_id,
  owner.name AS owner,
  owner.profile_pic AS owner_pic,
  team.name AS team FROM board
JOIN person AS owner ON owner.id = board.owner
JOIN team ON board.team = team.id
WHERE board.name ILIKE $1 AND (team.id IN (
  SELECT id FROM team
  WHERE manager_id = $2

  UNION ALL

  SELECT team_id FROM team_member
  WHERE user_id = $2
  AND approved
) OR board.owner = $2);
