import React, { Component } from 'react';
import axios from 'axios';

import './boards.scss';

class Boards extends Component {

    state = {
        boardID: this.props.board_id,
        selectedRow: -1,
        items: [],
        commentList: [],
        open: false,
        taskName: '',
        cellSetups:[],
        selectedDay: null
    };

    currentId = 1;

    // selectRow = (id, name) => {
    //     this.setState({
    //         selectedRow: id,
    //         taskName: name,
    //     });
    // }


    openCommentSlideIn = (id) => {
        axios.get(`/api/comment/on-task/${id}`)
            .then(response => {
                const list = response.data.reverse()
                this.setState({
                    commentList: list
                })
            })
        this.setState({
            open: true
        })
    }



    handleSlideInClose = () => {
        this.setState({
            open: false,
            commentList: []
        })
    }

    // add axios request to create row

    componentDidMount() {
        axios.get(`/api/task/bb/${this.props.board_id}`)

            .then(({ data }) => {

                this.setState({ items: data })
            })
        // document.addEventListener('mousedown', this.updateCell);
        document.addEventListener('click', e => e.target.focus())
    }

    addRowOnEnter = ({ key, target, target: { value } }) => {
        if (key === 'Enter') {
            target.value = ""

            axios.post("/api/task", { boardID: this.state.boardID, name: value });

            this.setState({
                items: this.state.items.concat({
                    name: value,
                    // name: value.replace(/(.*) +.* +.*/, '$1'),
                    // lastName: value.replace(/.* +(.*) +.*/, '$1'),
                    // age: +value.replace(/.* +.* +(.*)/, '$1'),
                })

            });
        }
    }

    onDropdownChange = (col_name, id, class_name, values ) => {



        const cellSetup = {
            name: col_name,
            id: id,
            class_name: class_name,
            values: values,

        }
        this.setState({
            cellSetups: [...this.state.cellSetups, cellSetup],

        }, () => {
            console.log(this.state.cellSetups.date)
            document.activeElement.blur()
        })
    }
    handleDayClick = (day, { selected }) => {


        this.setState({
            selectedDay: selected ? undefined : day,
        },() => {
            const dateSetup = {
                date: this.state.selectedDay

            }
            this.setState({
                cellSetups:[...this.state.cellSetups, dateSetup]
            })
            console.log(this.state.selectedDay)
            document.activeElement.blur()
        })
    }
    updateCommentList = (newComment) => {

        this.setState({
            commentList: [newComment, ...this.state.commentList]
        })

    }
    updateCell = (cellType, id, name) => {
        this.setState({
            selectedRow: id,
            selectedColumn: cellType,
            taskName: name,
        });
        switch (cellType) {
            case 'name':
                this.openCommentSlideIn(id)
                break;
            case 'owner':

                break;
            case 'status':

                break;
            case 'start_date':

                break;
            case 'end_date':

                break;
            case 'person':

                break;
            case 'time_est':

                break;
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
        const columns = ['name',
            'owner',
            'priority',
            'status',
            'end_date',
            'person',
            'time_est']

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
                            <th>Date</th>
                            <th>Person</th>
                            <th>Time Est.</th>
                        </tr>
                    </thead>
                    {items.map((obj, i) => (
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
                            {columns.map((col_name, j) => {
                                const selected = obj.id === selectedRow &&
                                    col_name === selectedColumn
                                let class_name;
                                let values;
                                let date;
                                this.state.cellSetups.forEach(cellSetup => {
                                    if(cellSetup.name === col_name && obj.id === cellSetup.id) {
                                        class_name = cellSetup.class_name
                                        values = cellSetup.values
                                        date = cellSetup.date
                                    }
                                    console.log(date)
                                })
                                return (
                                    <td
                                        className={`${class_name}`}
                                        onClick={
                                            () => updateCell(col_name, obj.id, obj.name)
                                        }
                                        tabIndex={i * 8 + j + 1}
                                    >
                                        {values ? values : obj[col_name]}

                                        <DashColumnPicker
                                            id={`col-${obj.id}-${col_name} `}
                                            modalType={col_name}
                                            selected={selected}
                                            dropdownChange={this.onDropdownChange}
                                            cellID={obj.id}
                                            handleDayClick={this.handleDayClick}
                                            selectedDay={this.state.selectedDay}
                                        />
                                    </td>)
                            })}

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