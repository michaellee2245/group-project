import React, { Component } from 'react';
import axios from 'axios';

import './boards-view.scss';
import Boards from '../../../components/Boards/Boards';

class BoardsView extends Component {

    state = {
        board_id: [],
        boards: [],
    }

    componentDidMount() {
        axios.get('/api/board')
            .then(boards => {
                const board_id = boards.data.map(e => e.id)
                console.log(boards)

                this.setState({ board_id: board_id, boards: boards.data })
            })
    }

    handleNewBoard = ({ key, target, target: { value } }) => {

        if (key === 'Enter') {
            target.value = ''

            axios.post('/api/board', { name: value, teamID: 4 })
                .then(boards => {
                    console.log(boards.data)
                    this.setState({ boards: [...this.state.boards, boards.data] })
                })
        }
    }

    render() {

        const {
            handleNewBoard
        } = this

        return (
            <div>
                <div>
                    <input
                        placeholder="+ Add new board"
                        onKeyDown={handleNewBoard}
                    />
                    <button >Create Board</button>
                </div>
                <div className="board-view-container">
                    {this.state.boards.map((board) => {
                        return (

                            <Boards board_id={board.id} board_name={board.name} />

                        )
                    })}
                </div>
            </div>
        )

    }
}

export default BoardsView;