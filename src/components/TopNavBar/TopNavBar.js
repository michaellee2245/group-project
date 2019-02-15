import React, { Component } from 'react';
import './TopNavBar.scss'

class TopNavBar extends Component {
    render() {
        return (
            <div className="navbar-wrapper">
                <div className = 'first-three'>
                    <div className="navbar-tab">
                        <a href="#" className="text">
                            <div className="add-member-span">
                                <div className="dropdown-notifs">
                                    <i className="material-icons">notifications_none</i>
                                    <div className="dropdown-content">
                                        Notifications
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="navbar-tab">
                        <a href="#" className="text">
                            <div className="dropdown-people">
                                <i className="material-icons">people_outline</i>
                                <div className="dropdown-content">
                                    Team Members
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="navbar-tab">
                        <input placeholder="Search Everything ..." className="search-bar">
                        </input>
                            <a href = 'https://google.com'>
                        <div className="search-icon">
                            <i className="material-icons">search</i>
                        </div>
                            </a>
                        
                        
                    </div>
                </div>

                <div className='last-two'>
                <div className="navbar-tab">
                    <a href="#" className="text">
                        <div className="add-member-span">
                            <i className="material-icons">add_circle_outline</i>
                            <p> Invite Team Members </p>
                        </div>
                    </a>
                </div>

                <div className="navbar-tab">
                    <a href="#" className="text">
                        <div className="add-member-span">
                            <i className="material-icons">face</i>
                            <p> UserProfile</p>
                        </div>
                    </a>
                </div>
                </div>
            </div>
        )
    }


}

export default TopNavBar;