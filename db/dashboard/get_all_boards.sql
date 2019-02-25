/* get all boards the user has access to */

SELECT
  board.id AS id,
  board.name AS name,
  board.description AS description,
  board.team AS team_id,
  board.owner AS owner_id,
  owner.name AS owner,
  owner.profile_pic AS owner_pic,
  team.name AS team,
  board.team NOT IN (
    SELECT team.id FROM team
    JOIN team_member ON team.id = team_member.team_id
  ) AS private FROM board
JOIN person AS owner ON owner.id = board.owner
JOIN team ON board.team = team.id
WHERE team.id IN (
  SELECT id FROM team
  WHERE manager_id = $1

  UNION ALL

  SELECT team_id FROM team_member
  WHERE user_id = $1
  AND approved
) OR board.owner = $1;
