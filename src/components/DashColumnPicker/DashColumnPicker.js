import React, { Component } from 'react';
import './dash-column-picker.scss';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


class DashColumnPicker extends Component {

    handleDayClick = (day, { selected }) => {
        this.setState({
            selectedDay: selected ? undefined : day,
        });
    }


    modalTypes = modalType => {
        switch (modalType) {
            case 'priority':
                return (
                    <div
                        className="priority-container"
                        onClick={this.stopPropagation}
                    >
                        <div
                            name='High'
                            className="column-modal-button high-priority"
                            onClick={(e) => this.props.dropdownChange(this.props.modalType, this.props.cellID, 'high-priority', 'High', e)}
                        >
                            High
                        </div>
                        <div className="column-modal-button medium-priority"
                            onClick={() => this.props.dropdownChange(this.props.modalType, this.props.cellID, 'medium-priority', 'Medium')}

                        >
                            Medium
                        </div>
                        <div className="column-modal-button low-priority"
                            onClick={() => this.props.dropdownChange(this.props.modalType, this.props.cellID, 'low-priority', 'Low')}

                        >
                            Low
                        </div>
                    </div>
                )
            case 'status':
                return (

                    <div
                        className="status-container"
                        onClick={this.stopPropagation}
                    >
                        <div className="column-modal-button done-status"
                            onClick={() => this.props.dropdownChange(this.props.modalType, this.props.cellID, 'done-status', 'Done')}
                            
                            >
                            Done
                        </div>
                        <div className="column-modal-button in-progress-status"
                            onClick={() => this.props.dropdownChange(this.props.modalType, this.props.cellID, 'in-progress-status', 'In Progress')}
                            
                            >
                            In Progress
                        </div>
                        <div className="column-modal-button on-hold-status"
                            onClick={() => this.props.dropdownChange(this.props.modalType, this.props.cellID, 'on-hold-status', 'On Hold')}

                        >
                            On Hold
                        </div>
                    </div>
                )
            case 'start_date':
            case 'end_date':
                return (
                    <div
                        className="date-container"
                        
                    >
                        <DayPicker
                            selectedDays={this.props.selectedDay}
                            onDayClick={ (a, b) => this.props.handleDayClick(a,b, this.props.modalType, this.props.cellID)}
                        />
                    </div>
                )
            case 'owner':
            case 'person':
                return (
                    ''
                )
            default:
                return '';
        }
    }

    render() {

        const { modalType, openPicker } = this.props;

        return (

            <div
                id={this.props.id}
                className={`column-modal-container ${this.props.selected ? "" : "hidden"}`}

            >
                {this.modalTypes(modalType)}
            </div>
        )
    }
}


export default DashColumnPicker;