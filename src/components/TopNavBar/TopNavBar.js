import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import img from '../../assets/bellRinging.png'
import './TopNavBar.scss'

class TopNavBar extends Component {
    state={}

render(){
    return(
        <div>
            <div className="notification-bell">
            <a href="https://youtu.be/dQw4w9WgXcQ">
            <span>
            <img src={img} alt="Notifications"></img>
            
            </span>
            </a>
            </div>

            <button>Members</button>
            <input placeholder="Search Anything"></input>
            <button>Invite</button>
            <button>User Profile</button>

        </div>
    )
}



}

export default TopNavBar;