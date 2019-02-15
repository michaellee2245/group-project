/* first argument your id, second argument user id you're trying to follow */

INSERT INTO follow
(follower, followee)
VALUES ($1,$2);