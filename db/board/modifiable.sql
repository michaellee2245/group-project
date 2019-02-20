/* see all the boards that you own or manage */


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
WHERE board.id IN (
  SELECT board.id FROM board
  JOIN team ON board.team = team.id
  WHERE team.manager_id = $1
  OR board.owner = $1
);
