/* update the board's description */

UPDATE board
SET description = $1
WHERE id = $2;
