/* Post a new user */

INSERT INTO person (
  name, email, password, privilege
) VALUES (
  $1, $2, $3, $4
);
