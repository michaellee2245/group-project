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
   WHERE user_id = 20
 ) AS read,
 rc.read_count AS read_count,
 lc.like_count AS like_count
FROM comment JOIN task ON comment.task_id = task.id
JOIN board ON task.board_id = board.id
JOIN team ON board.team = team.id
JOIN person AS author ON comment.author_id = author.id
JOIN (
  SELECT comment.id AS id, COUNT(read_comment.user_id) AS read_count
  FROM comment LEFT JOIN read_comment ON comment.id = read_comment.comment_id
  GROUP BY comment.id
) AS rc ON rc.id = comment.id
JOIN (
  SELECT comment.id AS id, COUNT(like_comment.user_id) AS like_count
  FROM comment LEFT JOIN like_comment ON comment.id = like_comment.comment_id
  GROUP BY comment.id
) AS lc ON lc.id = comment.id
WHERE board.team IN (
 SELECT id FROM team
 WHERE manager_id = 20
 UNION ALL
 SELECT team_id FROM team_member
 WHERE user_id = 20
 AND approved
);