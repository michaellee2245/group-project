import React, { Component } from 'react'
import './Personal.scss'

export default class Personal extends Component {
  state = {
    email: 'testaccount@monday.com',
    phone: '801-333-4444'
  }


  render() {
    return (
      <div className='personal_info_container'>
        <h2>Overview</h2>
        <div className='profile_edit_container'>
          <div className='icon_container'>
            <i class="far fa-user"></i>
          </div>
          {/* the next div will be the div that the link to the model will go */}
          <div className='data_container_popup_edit_link'>
            <span className='edit_text_title'>Title:</span>
            <span className='profile-field-content'>Add a title</span>
            <i class="fas fa-pencil-alt"></i>
          </div>
        </div>
        <div className='profile_edit_container'>
          <div className='icon_container'>
            <i class="fas fa-envelope-square"></i>
          </div>
          {/* the next div will be the div that the link to the model will go */}
          <div className='data_container_popup_edit_link'>
            <span className='edit_text_title'>Email:</span>
            <span className='profile-field-content'>{this.state.email}</span>
            <i class="fas fa-pencil-alt"></i>
          </div>
        </div>
        <div className='profile_edit_container'>
          <div className='icon_container'>
            <i class="fas fa-phone"></i>
          </div>
          {/* the next div will be the div that the link to the model will go */}
          <div className='data_container_popup_edit_link'>
            <span className='edit_text_title'>Phone:</span>
            <span className='profile-field-content'>{this.state.phone}</span>
            <i class="fas fa-pencil-alt"></i>
          </div>
        </div>
      </div>

    )
  }
}
