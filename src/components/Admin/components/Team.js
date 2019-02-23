import React, { Component } from 'react'
import { connect } from 'react-redux'
import './StatBox.scss'

class Team extends Component {


  roster = this.props.dashboard.roster ? this.props.dashboard.roster : []


  render() {
    const teams = this.roster.map((i) => {
      return (
        <tr>
          <td>{i.name}</td>
          <td>{i.email}</td>
          <td>{i.phone}</td>
          <hr />
        </tr>


      )
    })
    return (
      <div>

        <table className='team-table-wrapper'>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
          {teams}

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