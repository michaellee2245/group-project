import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class TopNavBar extends Component {
    state={}

render(){
    return(
        <div>
            <button>Notifications</button>
            <button>Members</button>
            <input placeholder="Search Anything"></input>
            <button>Invite</button>
            <button>User Profile</button>

        </div>
    )
}



}

export default TopNavBar;