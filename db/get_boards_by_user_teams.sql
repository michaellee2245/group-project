/* Get all boards that pertain to a specific user's team(s) */

SELECT board.id, board.name, board.description FROM board
JOIN task ON task.board_id = board.id
JOIN person AS owner ON task.owner_id = owner.id
JOIN assignment ON assignment.task_id = task.id
WHERE owner.id IN (
  SELECT user_id FROM team_member
  WHERE team_id IN (
    SELECT team_id FROM team_member
    WHERE user_id = $1
  )
) OR owner.id IN (
  SELECT user_id FROM team_member
  WHERE team_id IN (
    SELECT id FROM team
    WHERE manager_id = $1
  )
) OR assignment.user_id IN (
  SELECT user_id FROM team_member
  WHERE team_id IN (
    SELECT team_id FROM team_member
    WHERE user_id = $1
  )
) OR assignment.user_id IN (
  SELECT user_id FROM team_member
  WHERE team_id IN (
    SELECT id FROM team
    WHERE manager_id = $1
  )
) OR assignment.assigner_id IN (
  SELECT user_id FROM team_member
  WHERE team_id IN (
    SELECT team_id FROM team_member
    WHERE user_id = $1
  )
) OR assignment.assigner_id IN (
  SELECT user_id FROM team_member
  WHERE team_id IN (
    SELECT id FROM team
    WHERE manager_id = $1
  )
);
