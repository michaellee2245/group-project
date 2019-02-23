import React, { Component } from 'react';
import './DashSideNav.scss';
import DropDown from '../DropDown/DropDown';
import {connect} from 'react-redux'



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
  changeView = (n) => {
    const name = n
  }

  getInbox = (e) => {
    // const user = 'Starburst'
    // getMessages(user)
    this.props.changeViews(e)
    
  }
  getWeek = (e) => {
    console.log(e.target)

    this.props.changeViews(e)
  }

  inboxCount = () => {
    return this.state.count.length
  }

  publicBoardCount = () => {
    return this.props.user.boards.length
  }

  privateBoardCount = () => {
    return this.state.privateCount.length
  }

  showMenu = (e) => {
    this.setState({ hidden: !this.state.hidden})
    this.props.changeViews(e)
  }
  showPrivate = () => {
    this.setState({ showPrivate: !this.state.showPrivate})
    
  }



  render() {
    return (
      <div className="leftpane-container" id="leftpane-container">
        <div className="leftpane-component">
          <a href='www.monday.com'>
            <i class='../../assets/monday-logo-final.png' id='leftpane-logo' />
          </a>
        </div>
        <div className="leftpane-inbox-component">
          <div  className="inbox-wrap" title = 'Inbox' onClick = {this.getInbox}>
            {/* <a href="#" name = 'Inbox' className="link-wrapper router" > */}
              <div title='Inbox' className="title-side">Inbox</div>
              <div className="inboxCounter"> {this.inboxCount()}</div>
            {/* </a> */}
          </div>
        </div>
        <div>
          <div className="leftpane-week-component" title = 'MyWeek'  onClick = {this.getWeek}>
            {/* <a href="#" name = 'MyWeek' className="link-wrapper router"> */}
              <span title = 'MyWeek' className="title-side">My Week</span>
            {/* </a> */}
          </div>
        </div>
        <div className="leftpane-boards-list-wrapper" id="leftpane-boards-list-wrapper">
          <div>
            <div 
            className="leftpane-boards-public-list-component" 
            // id="leftpane-boards-list-component"
            
            >
              <a href="#" className="link-wrapper router" id="link-container" onClick = {this.showMenu} >
                <i class="material-icons title-side">menu</i><span className="title-side">Boards public</span>
                <span className="title-side"> ({this.publicBoardCount()})</span>
              </a>
              <div className = 'drop-menu'>
              {
                this.state.hidden
                ?(
                  <DropDown nav = {this.props.dashboard.boards ? this.props.dashboard.boards:[]} />
                )
                :(null)
              }
              
              </div>
            </div>
          </div>
        </div>
        <div className="leftpane-boards-list-wrapper" id="leftpane-boards-list-wrapper">
          <div>
            <div className="leftpane-boards-private-list-component" id="leftpane-boards-list-component">
              <a href="#" className="link-wrapper router" id="link-container" onClick = {this.showPrivate} >
                <i class="material-icons title-side">menu</i><span className="title-side">Boards private</span>
                <span className="title-side"> ({this.privateBoardCount()})</span>
              </a>
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