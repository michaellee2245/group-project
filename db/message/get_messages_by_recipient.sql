/* Get all direct messages sent to a specific user */
SELECT
  message.id,
  message.ts,
  message.content,
  sender.name AS author,
  sender.profile_pic AS author_pic,
  recipient.name AS recipient,
  message.read,
  'N/A' AS task,
  'N/A' AS board,
  'N/A' AS read_count,
  'N/A' AS like_count
FROM message
JOIN person AS sender ON message.author_id = sender.id
JOIN person AS recipient ON message.sendee_id = recipient.id
WHERE recipient.id = $1;
