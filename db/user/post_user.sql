/* Post a new user */

INSERT INTO person (
  name, email, password, privilege, profile_pic
) VALUES (
  $1, $2, $3, $4, 'https://pngimage.net/wp-content/uploads/2018/06/user-login-images-png-5.png'
);
