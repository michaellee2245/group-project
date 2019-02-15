/* Change name of team (please restrict to managers) */

UPDATE team
SET name = $1
WHERE id = $2;
