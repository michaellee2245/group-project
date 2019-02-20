/* delete board */

DELETE FROM board
WHERE id = $1;
