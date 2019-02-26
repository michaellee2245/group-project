import React, {Component} from 'react';
import './DropMenu.scss'

class DropDown extends Component {

      handleClick = () => {
        this.setState({ hidden: !this.state.hidden})
      }

      render() {
        const subMenu = this.props.nav.map(e => {
          return (
            <li className = 'drop-down-nav' >
              <a href='#' className = 'board-name'>
                {e.name}
              </a>
            </li>
          )
        })
        return (
          <div className = 'drop-nav-wrapper'>
                <ul className="submenu">
                  {subMenu}
                </ul>
          </div>
        )
      }
}

export default DropDown;
