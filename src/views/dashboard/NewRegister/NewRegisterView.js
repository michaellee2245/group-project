import React, { Component } from 'react';
import './new-register-view.scss';
import axios from 'axios';
import {connect} from 'react-redux';

class NewRegisterView extends Component {

    state = {
        searchText: '',
        teamsList: []
    }

    handleChange = (value) => {
        this.setState({
            searchText: value
        })
    }

    searchOnEnter = ({ key, target, target: { value } }) => {
        if (key === 'Enter') {
            target.value = ""
            axios.get(`/api/team/by-name/${this.state.searchText}`)
                .then(response => {
                    console.log(response.data)
                    this.setState({
                        teamsList: response.data
                    })
                })
        }
    }

    handleJoin = () => {
        axios.post(`/api/team/join-name`, {user: this.props.user})
    }

    render() {

        console.log(this.props.user.user.user)
        

        const teamsList = this.state.teamsList.map((team, i) => {
            console.log(team)
            return (
                <div className="team-name-container">
                    <div>{team.name}</div>
                    <i
                        className="material-icons"
                        onClick={this.handleJoin}
                    >
                        add_circle_outline
                    </i>
                </div>
            )
        })

        return (
            <div className="new-register-container">
                <h1>Join a Team.</h1>
                <input
                    placeholder="Search here..."
                    onChange={(e) => this.handleChange(e.target.value)}
                    onKeyDown={this.searchOnEnter}
                />
                <div className="list-container">
                    {teamsList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(NewRegisterView);
