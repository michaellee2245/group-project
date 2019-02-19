/* get board id by name. used when generating a new board */

SELECT id FROM board WHERE name = $1
ORDER BY ts DESC;
