import React, {Component} from 'react';
import bellRinging from '../../assets/bellRinging.png'
import peopleIcon from '../../assets/TwoPeople.png'
import './TopNavBar.scss'
import magGlass from '../../assets/magnifying-glass.png'
import addButton from '../../assets/add_blue.png'

class TopNavBar extends Component {
    state={}

render(){
    return(
        <div className="navbar-wrapper">
            <div className="navbar-tab">
                <a href="https://youtu.be/dQw4w9WgXcQ">
                    <span>
                        <img src={bellRinging} alt="Notifications" className="nav-img"></img>
                    </span>
                </a>
            </div>
            <div className="navbar-tab">
                <a href="https://youtu.be/ZZ5LpwO-An4">
                    <span>
                        <img src={peopleIcon} alt="Members" className="nav-img"></img>
                    </span>
                    </a>
            </div>
            <div class="search">
                <span class="search-icon">
                <img src={magGlass} alt="magGlass" className="search-img"></img>
                
                </span> 
             <input type="searchbar"placeholder="Search Everything ..." className="search-bar">
             </input>
            </div>

            <div className="navbar-tab-add">
                <a href="https://youtu.be/dQw4w9WgXcQ" className="add-text">
                    <span className="add-member-span">
                        <img src={addButton} alt="add Members" className="nav-img"></img>
                       <p> Invite Team Members </p>
                    </span>
                </a>
            </div>
            <button>User Profile</button>

        </div>
    )
}



}

export default TopNavBar;