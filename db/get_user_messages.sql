/* Get messages addressed to a specific user */

SELECT person.name AS sender, ts, content FROM message
JOIN person ON person.id = message.author_id
WHERE message.sendee_id = $1;
