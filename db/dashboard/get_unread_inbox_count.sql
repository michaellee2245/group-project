/* Get the number of unread messages a user has */

SELECT COUNT(message.read) AS inbox
FROM person JOIN message ON message.sendee_id = person.id
WHERE person.name = $1
AND message.read = FALSE;