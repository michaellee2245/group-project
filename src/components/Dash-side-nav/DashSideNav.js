import React, { Component } from 'react';
import './DashSideNav.scss';
import DropDown from '../DropDown/DropDown';
import { connect } from 'react-redux'

class DashSideNav extends Component {

  state = {
    hidden: false,
    showPrivate: false,
  }

  getComponent = e => {
    this.props.changeViews(e)
  }

  boardCount = p => {
    if (this.props.dashboard && this.props.dashboard.boards) {
      return this.props.dashboard.boards
        .filter(e => p ? e.private : !e.private).length;
    }
    return 0;
  }

  boardDisplay = p => {
    if (this.props.dashboard && this.props.dashboard.boards) {
      return this.props.dashboard.boards
        .filter(e => p ? e.private : !e.private).map(e => {
          return {
            name: e.name,
            board: e.name,
            number: e.id
          }
        })
    }
  }

  showMenu = e => {
    this.setState({ hidden: !this.state.hidden })
    this.props.changeViews(e)
  }

  showPrivate = () => {
    this.setState({ showPrivate: !this.state.showPrivate })
  }

  render() {
    return (
      <div className="leftpane-container" id="leftpane-container">
        <div className="leftpane-component">
          <a href='www.monday.com'>
            <i className='../../assets/monday-logo-final.png' id='leftpane-logo' />
          </a>
        </div>
        <div className="leftpane-inbox-component">
          <div className="inbox-wrap" title='Inbox' onClick={this.getComponent}>
            <div title='Inbox' className="title-side">Inbox</div>
            <div className="inboxCounter"> {this.props.count}</div>
          </div>
        </div>
        <div>
          <div className="leftpane-week-component" title='MyWeek' onClick={this.getComponent}>
            <span title='MyWeek' className="title-side">My Week</span>
          </div>
        </div>
        <div className="leftpane-boards-list-wrapper" id="leftpane-boards-list-wrapper">
          <div>
            <div className="leftpane-boards-public-list-component">
              <a href="#" className="link-wrapper router" id="link-container" onClick={this.showMenu} >
                <i class="material-icons title-side">menu</i><span className="title-side">Boards public</span>
                <span className="title-side"> ({this.boardCount()})</span>
              </a>
              <div className='drop-menu'>
                {
                  this.state.hidden
                    ? (
                      <DropDown nav={this.boardDisplay()} />
                    )
                    : (null)
                }

              </div>
            </div>
          </div>
        </div>
        <div className="leftpane-boards-list-wrapper" id="leftpane-boards-list-wrapper">
          <div>
            <div className="leftpane-boards-private-list-component" id="leftpane-boards-list-component">
              <a href="#" className="link-wrapper router" id="link-container" onClick={this.showPrivate} >
                <i class="material-icons title-side">menu</i><span className="title-side">Boards private</span>
                <span className="title-side"> ({this.boardCount(true)})</span>
              </a>
              {
                this.state.showPrivate
                  ? (
                    <div className='drop-menu'  >
                      <DropDown nav={this.boardDisplay(true)} />
                    </div>
                  )
                  : (null)
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
