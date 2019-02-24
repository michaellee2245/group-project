import React, {Component} from 'react';
import './new-register-view.scss';
import axios from 'axios';

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
        if(key === 'Enter') {
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

    render(){
        console.log(this.state.searchText)
        const teamsList = this.state.teamsList.map((team, i) => {
            return (
                <div className="team-name-container">
                    <div>{team.name}</div>
                </div>
            )
        })

        return(
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

export default NewRegisterView;
