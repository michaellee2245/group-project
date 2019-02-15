/* Takes a board id and person id
   Checks to see if the person is an approved member or the manager 
   of whatever team the board belongs to. */

SELECT $2 IN (
    SELECT user_id FROM team_member
    WHERE team_id IN (
        SELECT team FROM board
        WHERE id = $1
    )
    AND approved
) OR $2 IN (
    SELECT manager_id FROM team
    WHERE id IN (
        SELECT team FROM board
        WHERE id = $1
    )
)AS approval;
