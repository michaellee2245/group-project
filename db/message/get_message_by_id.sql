/* get message by id (please be sure it's the right user first) */


SELECT
  message.id,
  message.ts,
  message.content,
  sender.name AS sender,
  sender.profile_pic AS sender_pic,
  recipient.name AS recipient,
  message.read
FROM message
JOIN person AS sender ON message.author_id = sender.id
JOIN person AS recipient ON message.sendee_id = recipient.id
WHERE message.id = $1;
