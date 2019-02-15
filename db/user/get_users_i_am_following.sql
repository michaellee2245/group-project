/* Find users you are following.... */

SELECT id, name, email, profile_pic FROM person
WHERE id IN (
  SELECT followee FROM follow
  WHERE follower = $1
);
