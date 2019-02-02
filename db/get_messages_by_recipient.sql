/* Get all direct messages sent to a specific user */

SELECT
  message.id,
  message.ts,
  message.content,
  sender.name AS sender,
  recipient.name AS recipient
FROM message
JOIN person AS sender ON message.author_id = sender.id
JOIN person AS recipient ON message.sendee_id = recipient.id
WHERE recipient.id = $1;
