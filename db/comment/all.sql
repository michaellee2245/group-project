/* Return all the comments the user has access to */

SELECT
  comment.id AS id,
  comment.task_id AS task_id,
  task.name AS task,
  task.board_id AS board_id,
  board.name AS board,
  board.team AS team_id,
  team.name AS team,
  comment.author_id AS author_id,
  author.name AS author,
  author.profile_pic AS author_pic,
  comment.content AS content,
  comment.ts AS time_posted,
  comment.id IN (
    SELECT comment_id FROM read_comment
    WHERE user_id = $1
  ) AS read
FROM comment JOIN task ON comment.task_id = task.id
JOIN board ON task.board_id = board.id
JOIN team ON board.team = team.id
JOIN person AS author ON comment.author_id = author.id
WHERE board.team IN (
  SELECT id FROM team
  WHERE manager_id = $1
  UNION ALL
  SELECT team_id FROM team_member
  WHERE user_id = $1
  AND approved
);
