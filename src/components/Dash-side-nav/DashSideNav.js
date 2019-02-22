import React, { Component } from 'react';
import './DashSideNav.scss';
import DropDown from '../DropDown/DropDown';
import {connect} from 'react-redux';
import mondayLogo from '../../assets/monday-logo-final.png';

class DashSideNav extends Component {
  state = {
    count: [1, 2, 3, 4, 5],
    publicCount: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    privateCount: [1, 2, 3],
    messages: [],
    hidden:false,
    showPrivate:false,
    nav: [{board:"one",number:1},{board:"two",number:2},{board:"three",number:3}]
  }

  getComponent = e => {
    this.props.changeViews(e);
  }

  inboxCount = () => {
    return this.state.count.length;
  }

  publicBoardCount = () => {
    return this.props.dashboard.length;
  }

  privateBoardCount = () => {
    return this.state.privateCount.length;
  }

  showMenu = e => {
    this.props.changeViews(e);
    this.setState({ hidden: !this.state.hidden});
  }

  showPrivate = () => {
    this.setState({ showPrivate: !this.state.showPrivate})
  }

  render() {
    return (
      <div className="leftpane-container" id="leftpane-container">
        <div className="leftpane-component">
          <a href='/dashboard'>
            <img
              src={mondayLogo}
              id='leftpane-logo'
              alt="monday"
            />
          </a>
        </div>
        <div className="leftpane-inbox-component">
          <div
            className="inbox-wrapper"
            title="Inbox"
            onClick={this.getComponent}
          >
            <span title='Inbox' className="title">Inbox</span>
            <span className="inboxCounter"> {this.inboxCount()}</span>
          </div>
        </div>
        <div>
          <div
            className="leftpane-week-component"
            title="MyWeek"
            onClick={this.getComponent}
          >
            <span title = 'MyWeek' className="title">My Week</span>
          </div>
        </div>
        <div
          className="leftpane-boards-list-wrapper"
          id="leftpane-boards-list-wrapper"
        >
          <div>
            <div
              className="leftpane-boards-public-list-component"
            >
              <span className="link-wrapper router" onClick = {this.showMenu}>
                <i
                  title="boards"
                  className="material-icons"
                >menu</i>
                <span className="title">Boards public</span>
                <span
                  title="boards"
                  className="title"
                  onClick={this.getComponent}
                > ({this.publicBoardCount()})</span>
              </span>
              <div className = 'drop-menu'>
              {
                this.state.hidden
                ? (
                  <DropDown nav = {this.props.user.boards || []} />
                )
                : (null)
              }
              </div>
            </div>
          </div>
        </div>
        <div
          className="leftpane-boards-list-wrapper"
          id="leftpane-boards-list-wrapper"
        >
          <div>
            <div
              className="leftpane-boards-private-list-component"
              id="leftpane-boards-list-component"
            >
              <span
                className="link-wrapper router"
                onClick={this.showPrivate}
              >
                <i className="material-icons">menu</i>
                <span className="title">Boards private</span>
                <span className="title"> ({this.privateBoardCount()})</span>
              </span>
              {
                this.state.showPrivate
                ?(
                  <div className = 'drop-menu'  >
                    <DropDown nav = {this.state.nav} />
                  </div>
                )
                :(null)
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStatToProps = state => {
  return {
    user: state.user.user
  }
}

export default connect(mapStatToProps)(DashSideNav);
