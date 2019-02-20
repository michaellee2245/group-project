/* Change the board's name */

UPDATE board
SET name = $1
WHERE id = $2;
