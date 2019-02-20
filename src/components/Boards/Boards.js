import React, { Component } from 'react';
import axios from 'axios';

import './Boards.scss';

class Boards extends Component {

    state = {
        boardID: this.props.board_id,
        selectedRow: -1,
        items: [],
    };

    currentId = 1;

    selectRow = id => {
        this.setState({
            selectedRow: id,
        });
    }

    // add axios request to create row

    componentDidMount() {
        axios.get(`/api/task/bb/${this.props.board_id}`)

            .then(({ data }) => {

                this.setState({ items: data })
            })
    }

    addRowOnEnter = ({ key, target, target: { value } }) => {
        if (key === 'Enter') {
            target.value = ""

            axios.post("/api/task", { boardID: this.state.boardID, name: value });

            this.setState({
                items: this.state.items.concat({
                    task: value,
                    // name: value.replace(/(.*) +.* +.*/, '$1'),
                    // lastName: value.replace(/.* +(.*) +.*/, '$1'),
                    // age: +value.replace(/.* +.* +(.*)/, '$1'),
                })

            });
        }
    }

    render = () => {
        const {
            state: {
                selectedRow,
                items,

            },
            selectRow,
            addRowOnEnter,
        } = this;

      const { board_id, board_name } = this.props

        console.log(items)
        return (
            <div className="board-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: "400px" }}><h4>{board_name}</h4></th>
                            <th>Owner</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Person</th>
                            <th>Time Est.</th>
                        </tr>
                    </thead>
                    {items.map(({ id, name, owner, priority, status, start_date, end_date, person, time_est }) => (
                        <tr
                            className={id === selectedRow ?
                                'selected'
                                :
                                ''}
                            onClick={() => selectRow(id)}
                        >
                            <td
                            // here add events for all task cells
                            >{name}</td>
                            <td
                            // here add events for all owner cells
                            >{owner}</td>
                            <td>{priority}</td>
                            <td>{status}</td>
                            <td>{start_date}</td>
                            <td>{end_date}</td>
                            <td>{person}</td>
                            <td>{time_est}</td>
                        </tr>
                    ))}
                    {/* <tr>
                        <td>
                            <input
                                onKeyDown={addRowOnEnter}
                            />
                        </td>
                    </tr> */}
                </table>

                <input
                    className="add-row-input"
                    onKeyDown={addRowOnEnter}
                    placeholder="+ Add a task"
                />

            </div>

        );
    }
}


export default Boards;


    // <div className="board-view-container">
    //     <div className="board-header-container">
    //     {/* <i class="fas fa-chevron-circle-up"></i> */}
    //         <span><i class="fas fa-chevron-circle-down"></i></span>
    //         <h2>This Week</h2>
    //         <div>Owner</div>
    //         <div>Priority</div>
    //         <div>Status</div>
    //         <div>Start Date</div>
    //         <div>End Date</div>
    //         <div>Person</div>
    //         <div>Time Est.</div>
    //     </div>
    //     <div className="task-wrapper">
    //         {this.state.title.map(i => {
    //             return (
    //                 <div className="task-inner-wrapper">
    //                     <h4>{i}</h4>
    //                     <div className="cell-component">Owner</div>
    //                     <div className="cell-component">Priority</div>
    //                     <div className="cell-component">Status</div>
    //                     <div className="cell-component">Start Date</div>
    //                     <div className="cell-component">End Date</div>
    //                     <div className="cell-component">Person</div>
    //                     <div className="cell-component">Time Est.</div>
    //                 </div>
    //             )
    //         })}
    //     </div>
    // </div>