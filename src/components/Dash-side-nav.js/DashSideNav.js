import React, { Component } from 'react';
import './DashSideNav.scss';


export default class DashSideNav extends Component {
  state = {
    count: [1, 2, 3, 4, 5]
  }

  inboxCount = () => {
    return this.state.count.length
  }
  render() {
    return (
      <div className="leftpane-container" id="leftpane-container">
        <div className="leftpane-component">
          <a href='www.google.com'>ProjectName.com</a>
        </div>
        <div className="leftpane-inbox-component">
          <div className="inbox-wrapper">
          <a href="/" className="link-wrapper router">
            <span className="title">Inbox</span>
            
            <span className="inboxCounter"> {this.inboxCount()}</span>
          </a>
            </div>
        </div>
        <div>
          <div className="leftpane-week-component">
            <a href="/my week" className="link-wrapper router">
              <span className="title">My Week</span>
            </a>
          </div>
        </div>
        <div className="leftpane-boards-list-wrapper" id="leftpane-boards-list-wrapper">
          <div>
            <div className="leftpane-boards-public-list-component" id="leftpane-boards-list-component">
              <a href="/my boards-public" className="link-wrapper router">
                <span className="title">Boards public</span>
              </a>
            </div>
          </div>
        </div>
        <div className="leftpane-boards-list-wrapper" id="leftpane-boards-list-wrapper">
          <div>
            <div className="leftpane-boards-private-list-component" id="leftpane-boards-list-component">
              <a href="/my boards-private" className="link-wrapper router">
                <span className="title">Boards private</span>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}
