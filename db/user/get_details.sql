/* Get the user's profile details */

SELECT
  id,
  name,
  profile_pic,
  email,
  title,
  phone,
  skype,
  location
FROM person WHERE id = $1;