import React, { Component } from 'react'
import './Personal.scss'
import Popup from "reactjs-popup";
import Axios from '../../../../node_modules/axios';

const contentStyle = {
  maxWidth: "600px",
  width: "90%"
};

export default class Personal extends Component {
  state = {
    email: 'testaccount@monday.com',
    phone: '801-333-4444',
    title: '',
    email: '',
    phone: '',
  }

  handleClickSave = () => {
    Axios.put('api/user/title', { title: this.state.title })
  }

  render() {
    return (
      <div className='personal_info_container'>
        <h2>Overview</h2>
        <div className='profile_edit_container'>
          <div className='icon_container'>
            <i class="far fa-user"></i>
          </div>
          <Popup
            trigger={<div className='data_container_popup_edit_link'>
              <span className='edit_text_title'>Title:</span>
              <span className='profile-field-content'>Add a title</span>
              <i class="fas fa-pencil-alt"></i>
            </div>} modal contentStyle={contentStyle}>
            {close => (
              <div className="edit_form">
                <div className="close" onClick={close}>&times;</div>
                <div className="header"> Title</div>
                <br />
                <div className="ui input">
                  <input type='text' id='title_input' name='title' value={this.state.title} onChange={this.handleChange} />
                </div>
                <br />
                <div className='save-title-btn'>
                  <button className="save" onClick={() => this.handleClickSave(close)}>Save</button>
                </div>
              </div>
            )}
          </Popup>
        </div>
        <div className='profile_edit_container'>
          <div className='icon_container'>
            <i class="fas fa-envelope-square"></i>
          </div>
          <Popup
            trigger={<div className='data_container_popup_edit_link'>
              <span className='edit_text_title'>Email:</span>
              <span className='profile-field-content'></span>
              <i class="fas fa-pencil-alt"></i>
            </div>} modal contentStyle={contentStyle}>
            {close => (
              <div className="edit_form">
                <div className="close" onClick={close}>&times;</div>
                <div className="header"> Email</div>
                <br />
                <div className="ui input">
                  <input type='text' id='title_input' name='title' value={this.state.email} onChange={this.handleChange} />
                </div>
                <br />
                <div className='save-title-btn'>
                  <button className="save" onClick={() => this.handleClickSave(close)}>Save</button>
                </div>
              </div>
            )}
          </Popup>
        </div>
        <div className='profile_edit_container'>
          <div className='icon_container'>
            <i class="fas fa-phone"></i>
          </div>
          <Popup
            trigger={<div className='data_container_popup_edit_link'>
              <span className='edit_text_title'>Phone:</span>
              <span className='profile-field-content'>{this.state.phone}</span>
              <i class="fas fa-pencil-alt"></i>
            </div>} modal contentStyle={contentStyle}>
            {close => (
              <div className="edit_form">
                <div className="close" onClick={close}>&times;</div>
                <div className="header"> Phone</div>
                <br />
                <div className="ui input">
                  <input type='text' id='title_input' name='title' value={this.state.phone} onChange={this.handleChange} />
                </div>
                <br />
                <div className='save-title-btn'>
                  <button className="save" onClick={() => this.handleClickSave(close)}>Save</button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }

}