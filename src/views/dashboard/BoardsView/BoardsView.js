import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import './boards-view.scss';
import Boards from '../../../components/Boards/Boards';


class BoardsView extends Component {

    state = {
        board_id: [],
        boards: [],
        groupedByTeams: {},

    }

    componentDidMount() {
        axios.get('/api/board')
            .then(boards => {
                const board_id = boards.data.map(e => e.id)
                console.log(boards)

                const groupedByTeams = _.groupBy(boards.data, board => board.team_id)
                console.log(groupedByTeams);

                this.setState({ board_id: board_id, boards: boards.data, groupedByTeams })
            })
    }

    handleNewBoard = ({ key, target, target: { value } }, teamID) => {

        if (key === 'Enter') {
            target.value = ''

            axios.post('/api/board', { name: value, teamID: teamID })
                .then(boards => {
                    console.log(boards.data)
                    const newBoards = [...this.state.boards, boards.data]

                    const groupedByTeams = _.groupBy(newBoards, board => board.team_id)

                    this.setState({ boards: newBoards, groupedByTeams })
                })
        }
    }



    render() {

        const {
            state: {
                groupedByTeams
            },

            handleNewBoard,

        } = this

        return (
            <div>

                <div className="board-view-container">
                    {Object.entries(groupedByTeams).map(([teamID, boards]) =>
                        <div className="grouped-teams">
                            <div className="title-container">
                                <div className="team-title" >{boards[0].team}</div>
                                <div className="add-board">
                                    <input
                                        placeholder="+ Add new group"
                                        onKeyDown={(e) => handleNewBoard(e, teamID)}
                                    />
                                    <button onClick={(e) => this.handleNewBoard(e, teamID)} >+</button>
                                </div>


                            </div>
                            <div>
                                {boards.map((board) => {
                                    return (

                                        <Boards board_id={board.id} board_name={board.name} />

                                    )
                                })}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        )

    }
}

export default BoardsView;


