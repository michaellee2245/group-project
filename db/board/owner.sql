/* transfer ownership of the board to a new owner */

UPDATE board
SET owner = $1
WHERE id = $2;
