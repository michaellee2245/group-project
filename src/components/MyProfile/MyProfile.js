import React, { Component } from 'react'
import './MyProfile.scss'
import { NavLink } from 'react-router-dom';

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
                  <span className='edit_username_component'>
                    <input value={this.state.username} name='username' onChange={this.handleChange} className='edit_username'></input>
                  </span>
                </div>
              </div>
              <ul className='list_tabs'>
                <NavLink to='/dashboard/personal-info' activeClassName='is-selected'>
                  <li>Personal Info</li>
                </NavLink>
                <NavLink to='/dashboard/password' activeClassName='is-selected'>
                  <li>Password</li>
                </NavLink>
              </ul>
            </section>
            <section className='user_profile_bottom_container'>
            </section>
          </div>
        </div>
      </div>
    )
  }
}
