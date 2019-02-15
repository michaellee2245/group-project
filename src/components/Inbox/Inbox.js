import React, { Component } from 'react';
import './inbox.scss'
import DefaultInbox from './DefaultInbox';
class Inbox extends Component {

    state = {
        toggleDefaultInbox: true,
        allUpdates: false,

    }

    componentDidMount(){

    }

    allUpdateShow = () => {}

    render() {

       

        return (
            <div className="inbox-wrapper">

                <div className="inbox-title-wrapper">
                    <span className="inbox-title">Inbox</span>

                    <div className="inbox-title-actions">
                        <span className="inbox-toggle-mode">
                            <a href="" className="active"> Open (0)</a>
                            /
                <a href="" className="inbox-all-updates">All Updates</a>

                        </span>
                    </div>
                </div>



                <div className="middle-space-wrapper">
                    <div className="middle-space-wall">
                        <div className="posts-list">
                            <DefaultInbox></DefaultInbox>
                            
                        

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Inbox;