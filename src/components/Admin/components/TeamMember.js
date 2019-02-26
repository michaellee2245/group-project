import React, { Component } from 'react';
import axios from 'axios';

class TeamMember extends Component {
  state = {
    buttonDisabled: false,
    approvedTeamMember: false,
    buttonText: 'Approve'
  }

  approveUser = () => {
    this.setState({ buttonDisabled: true, buttonText: 'one moment' })
    axios.post('/api/team/approval', {
      teamID: this.props.teamMember.team_id,
      memberID: this.props.teamMember.id
    }).then(() => {
      this.setState({ approvedTeamMember: true });
    })
  }


  render() {
    const { props: { teamName, teamMember }, state: { buttonDisabled, approvedTeamMember, buttonText } } = this;
    if (teamMember.approved || approvedTeamMember) {
      return (
        <tr>
          <td>{teamMember.name} {teamMember.manager ? '(manager)' : ''}</td>
          <td>{teamMember.email}</td>
          <td>{teamMember.phone}</td>
        </tr>
      )
    } else {
      return (
        <tr>
          <td>{teamMember.name}</td>
          <td>
            This user has requested to join your team.
            </td>
          <td>
            <button onClick={this.approveUser} disabled={buttonDisabled}>
              {buttonText}
            </button>
          </td>
        </tr>
      )
    }
  }
}

export default TeamMember;
