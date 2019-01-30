/* Add a member to a team */

INSERT INTO team_member (
  user_id, team_id
) VALUES (
  $1, $2
);
