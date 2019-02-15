/* Look up team by name */

SELECT id FROM team WHERE name = $1
ORDER BY ts DESC;
