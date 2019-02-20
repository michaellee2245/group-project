import React, { Component } from 'react';
import axios from 'axios';

import './BoardsView.scss';
import Boards from '../../../components/Boards/Boards';

class BoardsView extends Component {

    state = {
        board_id: [],
        boards:[],
    }

    componentDidMount() {
        axios.get('/api/board')
        .then(boards => {
            const board_id = boards.data.map(e => e.id)
            console.log(board_id)
            
            this.setState({board_id: board_id, boards: boards.data})
        })
    }



    render() {
        return (
            <>
                {this.state.boards.map((board) => {
                    return (

                        <Boards board_id={board.id} board_name = {board.name} />

                    )
                })}
            </>
        )

    }
}

export default BoardsView;