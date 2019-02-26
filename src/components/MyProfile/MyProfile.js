import React, { Component } from 'react'
import './MyProfile.scss'
import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Personal from './components/Personal'
import Password from './components/Password'
import Popup from "reactjs-popup";
import { connect } from 'react-redux';
import { setPic } from '../../redux/actions'

const contentStyle = {
  maxWidth: "600px",
  width: "90%"
};

class MyProfile extends Component {
  state = {
    username: '',
    changeUsername: '',
    url: '',
  }

  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({ [key]: value })
  }
  handleClickUrl = (close) => {
    this.props.setPic({ pic: this.state.url })
    close() 
  }


  render() {
    return (
      <div className='content'>
        <div className='user_profile_container'>
          <div className='user_profile'>
            <section className='user_profile_top_container'>
              <div className='user_middle_container'>
                <div className='user_inner_container user_profile_top st_current'>
                  <Popup className='popup_wrapper'
                    trigger={<div className='hover_wrapper'>
                      <div className='profile-image-component'>
                        <img className="profile-image-hover" src={this.props.user.pic}></img>
                        <div className='change_picture_hover'>
                          <i class="fas fa-user-plus"></i>
                          <div className='change-picture-text'>Change profile picture</div>
                        </div>
                      </div>
                    </div>}
                    modal contentStyle={contentStyle}>
                    {close => (
                      <div className='popup_wrapper'>
                        <div className="picture_edit_form">
                          <div className="close" onClick={close}>&times;</div>
                          <div className="header"> Change picture</div>
                          <br />
                          <div className="ui input">
                            <input type='text' id='title_input' name='url' placeholder='enter a url' value={this.state.url} onChange={this.handleChange} />
                          </div>
                          <button className="save_url_btn" onClick={() => this.handleClickUrl(close)}>Save</button>
                          <br />
                          <div className="header2" onclick={() => this.handleClickRemovePic(close)}> Remove picture
                          <br />
                            <i class="fas fa-trash-alt" ></i>
                          </div>
                        </div>
                      </div>
                    )}
                  </Popup>
                </div>
              </div>
              <Popup
                trigger={
                  <div className='tooltipProfileWrapper'>
                    <div className='tooltip'>
                      <span className='tooltiptext'>Edit user name</span>
                      <span className='edit_username_component'>
                        <div className='userName'>{this.props.user.name}</div>
                      </span>
                    </div>
                  </div>}
                modal contentStyle={contentStyle}>
                {close => (
                  <div className="edit_form">
                    <div className="close" onClick={close}>&times;</div>
                    <div className="header"> Change username</div>
                    <br />
                    <div className="ui input">
                      <input type='text' id='username_input' name='username' value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <br />
                    <div className='save-title-btn'>
                      <button className="save" onClick={() => this.handleClickChangeUsername(close)}>Save</button>
                    </div>
                  </div>
                )}
              </Popup>
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
                <Route path='/dashboard/profile/personal-info' render={(props) => <Personal {...props} user={this.props.user} />} />
                <Route path="/dashboard/profile/password" component={Password} />
              </Switch>
            </section>
          </div>
        </div>
      </div>
    )
  }

}
export default connect(null, { setPic })(MyProfile)
