/* Get all messages that the indicated user has sent */

SELECT
  message.id,
  message.ts,
  message.content,
  sender.name AS sender,
  recipient.name AS recipient,
  recipient.profile_pic AS recipient_pic,
  message.read
FROM message
JOIN person AS sender ON message.author_id = sender.id
JOIN person AS recipient ON message.sendee_id = recipient.id
WHERE message.author_id = $1;
