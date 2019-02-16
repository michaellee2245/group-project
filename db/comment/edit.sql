/* change the content of a comment */

UPDATE comment
SET content = $2
WHERE id = $1;
