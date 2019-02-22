import React, { Component } from 'react'
import {connect} from 'react-redux'

class Team extends Component {

  rosterMapper = (e,i) => {
    return (
      <tr key={i}>
        <td>{e.name}</td>
        <td>{e.email}</td>
        <td>{e.phone}</td>
      </tr>
    )
  }

  render() {
    const {props: {dashboard}, rosterMapper} = this;
    const roster = dashboard.roster || [];
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {roster.map(rosterMapper)}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dashboard: state.user.dashboard
  }
}

export default connect(mapStateToProps)(Team);
