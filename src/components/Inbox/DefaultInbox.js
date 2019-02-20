import React from 'react';
import './defaultInbox.scss'

function DefaultInbox() {
    return(
        <div className="inbox-middle-default">
             <i className="material-icons" >beach_access</i>
             <h1 className="inbox-zero-header">Yes!</h1>
             <div className="inbox-zero-text">
                 You have reached the hallowed state of Inbox Zero!
             </div>

        </div>

    )
}

export default DefaultInbox;