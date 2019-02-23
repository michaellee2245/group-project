/* Get everything a user needs to see on login */

SELECT
  person.id AS id,
  person.name AS name,
  person.email AS email,
  person.profile_pic AS pic,
  person.title AS title,
  person.skype AS skype,
  person.phone AS phone,
  person.location AS location,
  (SELECT COUNT(message.read)
    FROM person JOIN message ON message.sendee_id = person.id
    WHERE person.name = $1
    AND message.read = FALSE) AS inbox
FROM person
WHERE person.name = $1;
