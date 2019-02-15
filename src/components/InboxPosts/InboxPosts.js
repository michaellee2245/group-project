import React, { Component } from 'react';
import './inboxPosts.scss';

class InboxPosts extends Component {

    render() {
        return (
            <div className="post-container">
                <div className="post-header">
                    <div className="post-title">
                        <a href="profile_info">
                            <img className="profile-pic" src="https://www.browning.com/content/dam/browning/general/logos/corporate/buckmark_color.jpg/_jcr_content/renditions/cq5dam.web.250.250.jpeg" alt="profile-pic"></img>
                        </a>
                    <div className="title">
                        <a className="user-name" href="Profile-Name">JBoss</a>
                        <div className="post-board-link">
                            <a href="actual-post-board-link" className="router-link">
                                <i className="material-icons">sort</i>
                                 Board Name
                            </a>
                            <span> > </span>
                            <a href="task-name" className="router-link">Task Name</a>
                        </div>
                    </div>
                    </div>


                </div>

            </div>
        )
    }
}

export default InboxPosts;