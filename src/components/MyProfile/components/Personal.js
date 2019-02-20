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
  }

  handleClickSave = () =>{
 Axios.put('api/user/title', {title:this.state.title})
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
                <a className="close" href={'../Dashboard/personal-info'} onClick={close}>&times;</a>
                <div className="header"> Title</div>
                <div className="ui input">
                  <input type='text' id='title_input' name='title' value={this.state.title} onChange={this.handleChange} />
                </div>
                <button className="save" onClick={() => this.handleClickSave(close)}>Save</button>
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
                <a className="close" href={'../Dashboard/personal-info'} onClick={close}>&times;</a>
                {/* <div className="header"> Title</div> */}
                <div className="ui input">
                  <input type='text' placeholder='title "required"' name='title' value={this.state.title} onChange={this.handleChange} />
                </div>
                <button className="save" onClick={() => this.handleClickSave(close)}>Save</button>
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
                <a className="close" href={'../Dashboard/personal-info'} onClick={close}>&times;</a>
                {/* <div className="header"> Title</div> */}
                <div className="ui input">
                  <input type='text' placeholder='title "required"' name='title' value={this.state.title} onChange={this.handleChange} />
                </div>
                <button className="save" onClick={() => this.handleClickSave(close)}>Save</button>
              </div>
            )}
          </Popup>
          


          
        </div>



        <Popup
          trigger={<button className="editTitle">edit</button>} modal contentStyle={contentStyle}>
          {close => (
            <div className="edit_form">
              <a className="close" href={'../Dashboard/personal-info'} onClick={close}>&times;</a>
              <div className="header"> </div>
              <div className="ui input">
                <input type='text' placeholder='title "required"' name='title' value={this.state.title} onChange={this.handleChange} />
              </div>
              <button className="save" onClick={() => this.handleClickSave(close)}>Save</button>
            </div>
          )}
        </Popup>
      </div>
    )
  }

}