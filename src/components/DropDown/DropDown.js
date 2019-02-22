import React, {Component} from 'react';
import './DropMenu.scss'

class DropDown extends Component {

  subMenuMapper = (e,i) => {
    return (
      <li className="drop-down-nav" key={i}>
        <span className="board-name">
          {e.name}
        </span>
      </li>
    )
  }

  render() {
    const {props: {nav},subMenuMapper} = this;
    return (
      <div className="drop-nav-wrapper">
        <ul className="submenu">
          {nav.map(subMenuMapper)}
        </ul>
      </div>
    )
  }
}

export default DropDown;
