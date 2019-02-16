/* Get the team members that pertain to a particular team... */

SELECT user_id, name, profile_pic FROM team_member
JOIN person ON team_member.user_id = person.id
WHERE team_id = $1 AND approved;
