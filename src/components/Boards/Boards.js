import React, { Component } from 'react';

import './boards.scss';

class Boards extends Component {

    state = {
        title: [1, ]
    }

    render() {
        return (
            <div className="board-view-container">
                <div className="board-header-container">
                {/* <i class="fas fa-chevron-circle-up"></i> */}
                    <span><i class="fas fa-chevron-circle-down"></i></span>
                    <h2>This Week</h2>
                    <div>Owner</div>
                    <div>Priority</div>
                    <div>Status</div>
                    <div>Start Date</div>
                    <div>End Date</div>
                    <div>Person</div>
                    <div>Time Est.</div>
                </div>
                <div className="task-wrapper">
                    {this.state.title.map(i => {
                        return (
                            <div className="task-inner-wrapper">
                                <h4>{i}</h4>
                                <div className="cell-component">Owner</div>
                                <div className="cell-component">Priority</div>
                                <div className="cell-component">Status</div>
                                <div className="cell-component">Start Date</div>
                                <div className="cell-component">End Date</div>
                                <div className="cell-component">Person</div>
                                <div className="cell-component">Time Est.</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Boards;