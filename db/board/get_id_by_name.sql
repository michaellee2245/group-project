/* get board id by name. used when generating a new board */

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
FROM board WHERE name = $1
ORDER BY ts DESC;
