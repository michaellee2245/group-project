import React, { Component } from 'react';
import './inbox.scss'
class Inbox extends Component {

    state = {

    }

    render() {
        return (
            <div className="inbox-wrapper">
                <div className="inbox-title-wrapper">
                    <span className="inbox-title">Inbox</span>
                </div>
                <div className="inbox-title-actions">
                    <span className="inbox-toggle-mode">
                        <a href="" className="active"> Open (0)</a>
                        /
                <a href="" className="inbox-all-updates">All Updates</a>

                    </span>
                </div>
                

                <div className="middle-space-wrapper">
                    <div className="middle-space-wall">
                        <div className="posts-list">
                        {/* <PostComponent></PostComponent> */}
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Inbox;