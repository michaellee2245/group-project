/* Get all messages sent by a particular sender (person id)
   and received by a particular person (person id)
   ordered by most recent first */
SELECT id, content, ts, read FROM message
WHERE author_id = $1
AND sendee_id = $2
ORDER BY ts DESC;
