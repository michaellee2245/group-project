import React, { Component } from 'react';
import { connect } from 'react-redux';
import './StatBox.scss';
import _ from 'lodash';

class Team extends Component {

  rosterMapper = teamName => (e, i) => {
    if (e.team_name === teamName) {
      return (
        <tr key={i}>
          <td>{e.name}</td>
          <td>{e.email}</td>
          <td>{e.phone}</td>
        </tr>
      )
    } else {
      return '';
    }
  }

  teamMapper = (e, i) => {
    const { props: { dashboard: { roster } }, rosterMapper } = this;
    return (
      <div className="team" key={i}>
        <h1>{e}</h1>
        <table className="team-table-wrapper">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
          {roster ? roster.map(rosterMapper(e)) : ''}
        </table>
      </div>
    )
  }

  render() {
    const { props: { dashboard: { roster } }, teamMapper } = this;
    return (
      <div>
        {roster ? _.uniq(roster.map(e => e.team_name)).map(teamMapper) : ''}
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
