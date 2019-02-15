/* set the organization field */

UPDATE team
SET organization = $2
WHERE id = $1;
