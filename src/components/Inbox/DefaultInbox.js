import React from 'react';
import './defaultInbox.scss';
import logo from '../../assets/mondaylogomark.png'

function DefaultInbox() {
    return(
        <div className="inbox-middle-default">
             <img className="img-logo" src={logo} alt=""></img>
             <h1 className="inbox-zero-header">Yes!</h1>
             <div className="inbox-zero-text">
                 You have reached the hallowed state of Inbox Zero!
             </div>

        </div>

    )
}

export default DefaultInbox;