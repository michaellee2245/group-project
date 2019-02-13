/* This series of operations will completely remove a team */
/* and all of its associated data. Use with caution */

/* First, we'll delete any associated comments: */

DELETE FROM comment WHERE task_id IN (
  SELECT id FROM task WHERE board_id IN (
    SELECT id FROM board WHERE team = $1
  )
);

/* Second, we'll delete any associated assignments: */

DELETE FROM assignment WHERE task_id IN (
  SELECT id FROM task WHERE board_id IN (
    SELECT id FROM board WHERE team = $1
  )
);

/* Third, we'll delete any associated tasks: */

DELETE FROM task WHERE board_id IN (
  SELECT id FROM board WHERE team = $1
);

/* Fourth, we'll delete any associated boards: */

DELETE FROM board WHERE team = $1;

/* Fifth, we'll delete any associated team memberships: */

DELETE FROM team_member WHERE team_id = $1;

/* Sixth, and finally, we'll delete the team itself. */

DELETE FROM team WHERE id = $1;

/* That's all folks! */
