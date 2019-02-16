/* Get the boards that pertain to a particular team... */

SELECT
  board.id AS id,
  board.name AS name,
  board.description AS description,
  owner.id AS owner_id,
  owner.name AS owner_name,
  owner.profile_pic AS owner_pic
FROM board
LEFT JOIN person AS owner ON board.owner = owner.id
WHERE team = $1;
