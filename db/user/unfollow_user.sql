/* first argument your id, second argument user id you're trying to unfollow */

DELETE FROM follow
WHERE follower = $1 AND followee = $2;
