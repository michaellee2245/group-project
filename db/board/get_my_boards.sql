/* get all the user's accessible boards */

SELECT
  board.name AS name,
  board.description AS description,
  board.team AS team_id,
  board.owner AS owner_id,
  owner.name AS owner,
  owner.profile_pic AS owner_pic,
  team.name AS team FROM board
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
