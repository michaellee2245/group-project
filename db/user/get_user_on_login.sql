/* Get everything a user needs to see on login */

SELECT
  person.id,
  person.name AS recipient,
  person.email,
  person.profile_pic,
  (SELECT COUNT(message.read)
    FROM person JOIN message ON message.sendee_id = person.id
    WHERE person.name = $1
    AND message.read = FALSE) AS inbox
FROM person
WHERE person.name = $1;