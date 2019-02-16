/* Return the comment with the specified ID number */

SELECT
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
  comment.ts AS time_posted
FROM comment JOIN task ON comment.task_id = task.id
JOIN board ON task.board_id = board.id
JOIN team ON board.team = team.id
JOIN person AS author ON comment.author_id = author.id
WHERE comment.id = $1;
