/* delete the user from the database */
/* please note that the amount of user data deleted might be a lot */
/* It will likely affect everyone on the user's teams. */

/* Delete all references to the user in the follow table */
DELETE FROM follow WHERE follower = $1 OR followee = $1;

/* Before we can delete tasks, we must delete comments on those tasks */
DELETE FROM comment WHERE task_id IN (
  SELECT id FROM task WHERE owner_id = $1
);

/* In addition, we must delete any assignments that reference that task */
DELETE FROM assignment WHERE task_id IN (
  SELECT id FROM task WHERE owner_id = $1
);

/* Now, delete the tasks that reference this person: */
DELETE FROM task WHERE owner_id = $1;

/* Next, delete the comments this person authored: */
DELETE FROM comment WHERE author_id = $1;

/* Then, delete the messages this person has sent or received: */
DELETE FROM message WHERE sendee_id = $1 OR author_id = $1;

/* Fourth, delete any tasks
   that belong to boards that belong to teams this person managed: */
DELETE FROM task WHERE board_id IN (
  SELECT id FROM board WHERE team IN (
    SELECT id FROM team WHERE manager_id = $1
));

/* Fifth, delete any boards that belong to teams this person managed: */
DELETE FROM board WHERE team IN (
  SELECT id FROM team WHERE manager_id = $1
);

/* We must delete any team members before deleting the team itself */
DELETE FROM team_member WHERE team_id IN (
  SELECT id FROM team WHERE manager_id = $1
);

/* Now, delete any teams this person managed: */
DELETE FROM team WHERE manager_id = $1;

/* Delete this person from all team rosters: */
DELETE FROM team_member WHERE user_id = $1;

/* Delete any assignments made by or to this person: */
DELETE FROM assignment WHERE user_id = $1 OR assigner_id = $1;

/* Finally, delete the actual person: */
DELETE FROM person WHERE id = $1;
