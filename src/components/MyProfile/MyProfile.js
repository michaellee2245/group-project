import React, { Component } from 'react'
import './MyProfile.scss'
import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Personal from './components/Personal'
import Password from './components/Password'
import Popup from "reactjs-popup";

export default class MyProfile extends Component {
  state = {
    username: 'Testaccount',
  }

  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({ [key]: value })
  }

  render() {
    return (
      <div className='content'>
        <div className='user_profile_container'>
          <div className='user_profile'>
            <section className='user_profile_top_container'>
              <div className='user_middle_container'>
                <div className='user_inner_container user_profile_top st_current'>
                  <div className='profile-image-component'>
                    <div className='hover_wrapper'>
                      <img class="profile-image hover" src="https://files.monday.com/photos/6645438/small/6645438-dapulse_light_blue.png?1548520278"></img>
                      <div className='change_picture_hover'>
                        <i class="fas fa-user-plus"></i>
                        <div className='change-picture-text'>Change profile picture</div>
                      </div>
                    </div>
                  </div>
                  <div className='tooltipProfileWrapper'>
                    <div className='tooltip'>
                      <span className='tooltiptext'>Edit user name</span>
                      <span className='edit_username_component'>
                        <input value={this.state.username} name='username' onChange={this.handleChange} className='edit_username'></input>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <ul className='list_tabs'>
                <NavLink to='/dashboard/profile/personal-info' activeClassName='is-selected'>
                  <li>Personal Info</li>
                </NavLink>
                <NavLink to='/dashboard/profile/password' activeClassName='is-selected'>
                  <li>Password</li>
                </NavLink>
              </ul>
            </section>
            <section className='user_profile_bottom_container'>
              <Switch>
                <Route path='/dashboard/profile/personal-info' component={Personal} />
                <Route path="/dashboard/profile/password" component={Password} />
              </Switch>
            </section>
          </div>
        </div>
      </div>
    )
  }
}
