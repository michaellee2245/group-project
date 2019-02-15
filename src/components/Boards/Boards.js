import React, { Component } from 'react';

import './boards.scss';

class Boards extends Component {

    state = {
        selectedRow: -1,
        items: [
            {
                id: 1,
                task: "",
                status: "Lowry",
                owner: 24,
                priority: 24,
                startDate: 24,
                endDate: 24,
                timeEst: 24,
                person: 24,
            },
        ],
    };

    currentId = 2;

    selectRow = id => {
        this.setState({
            selectedRow: id,
        });
    }

    // add axios request to create row
    addRowOnEnter = ({ key, target: { value } }) => console.log({ key, value }) || key === 'Enter' && this.setState({
        items: this.state.items.concat({
            task: value,
            // name: value.replace(/(.*) +.* +.*/, '$1'),
            // lastName: value.replace(/.* +(.*) +.*/, '$1'),
            // age: +value.replace(/.* +.* +(.*)/, '$1'),
        }),
    });

    render = () => {
        const {
            state: {
                selectedRow,
                items,
            },
            selectRow,
            addRowOnEnter,
        } = this;

        return (

            <table>
                <thead>
                    <tr>
                        <th><h4>This Week</h4></th>
                        <th>Owner</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Person</th>
                        <th>Time Est.</th>
                    </tr>
                </thead>
                {items.map(({ id, task, owner, priority, status, startDate, endDate, person, timeEst }) => (
                    <tr
                        className={id === selectedRow ?
                            'selected'
                            :
                            ''}
                        onClick={() => selectRow(id)}
                    >
                        <td
                        // here add events for all task cells
                        >{task}</td>
                        <td
                        // here add events for all owner cells
                        >{owner}</td>
                        <td>{priority}</td>
                        <td>{status}</td>
                        <td>{startDate}</td>
                        <td>{endDate}</td>
                        <td>{person}</td>
                        <td>{timeEst}</td>
                    </tr>
                ))}
                <tr>
                    <td>
                        <input
                            onKeyDown={addRowOnEnter}
                        />
                    </td>
                </tr>
            </table>


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