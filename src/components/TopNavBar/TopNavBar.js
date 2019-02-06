import React, { Component } from 'react';
// import bellRinging from '../../assets/bellRinging.png'
// import peopleIcon from '../../assets/TwoPeople.png'
import './TopNavBar.scss'
import magGlass from '../../assets/magnifying-glass.png'
// import addButton from '../../assets/add_blue.png'

class TopNavBar extends Component {
    state = {

    }

    render() {
        return (
            <div className="navbar-wrapper">
                <div className="navbar-tab">
                    <a href="https://youtu.be/dQw4w9WgXcQ">
                        <div className="dropdown-notifs">
                            {/* <img src={bellRinging} alt="Notifications" className="nav-img"></img> */}
                            <i className="material-icons">notifications_none</i>

                            <div className="dropdown-content">
                                Notifications
                </div>
                        </div>
                    </a>
                </div>
                <div className="navbar-tab">
                    <a href="https://youtu.be/ZZ5LpwO-An4">
                        <div className="dropdown-people">
                            {/* <img src={peopleIcon} alt="Members" className="nav-img"></img> */}
                            <i className="material-icons">people_outline</i>
                            <div className="dropdown-content">
                                Team Members
                        </div>
                        </div>
                    </a>
                </div>
                <div className="search">
                    <span className="search-icon">
                        <img src={magGlass} alt="magGlass" className="search-img"></img>

                    </span>
                    <input type="searchbar" placeholder="Search Everything ..." className="search-bar">
                    </input>
                </div>

                <div>
                    <a href="https://youtu.be/dQw4w9WgXcQ" className="add-text">
                        <div className="add-member-span">
                            {/* <img src={addButton} alt="add Members" className="nav-img"></img> */}
                            <i className="material-icons">add_circle_outline</i>
                            <p> Invite Team Members </p>
                        </div>
                    </a>
                </div>

                <div>
                    <a href="https://youtu.be/ZZ5LpwO-An4" className="add-text">
                        <span className="add-member-span">
                            {/* <img src={peopleIcon} alt="UserProfile" className="nav-img"></img> */}
                            <i className="material-icons">face</i>
                            <p> UserProfile</p>
                        </span>
                    </a>
                </div>

            </div>
        )
    }



}

export default TopNavBar;