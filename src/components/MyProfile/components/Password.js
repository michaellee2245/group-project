import React, { Component } from 'react'
import './Password.scss'

export default class Password extends Component {
  state = {
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  }

  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({ [key]: value })
  }

  render() {
    return (
      <div className='personal_info_container'>
        <h2>Change your password</h2>
        <div className='input_container'>
          <span className='lable'>Current Password</span>
          <input value={this.state.currentPassword} name='currentPassword' className='current_password' onChange={this.handleChange}></input>
        </div>
        <div className='input_container'>
          <span className='lable'>New Password</span>
          <input value={this.state.newPassword} name='newPassword' className='new_password' onChange={this.handleChange}></input>
        </div>
        <div className='input_container'>
          <span className='lable'>Confirm new Password</span>
          <input value={this.state.confirmNewPassword} name='confirmNewPassword' className='confirm_new_password' onChange={this.handleChange}></input>
        </div>
        <button onClick={this.save} className='save-btn'>Save</button>
      </div>


    )
  }
}
