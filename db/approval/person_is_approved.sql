/* Takes a person id and a team id and sees if the person is either
   the team's manager, or an approved member of the team */

SELECT
  bool_or(
    (team_member.user_id = $1 AND team_member.approved) OR
    team.manager_id = $1)
AS approved
FROM team_member JOIN team ON team_member.team_id = team.id
WHERE team.id = $2;
