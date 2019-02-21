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

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false)
    }

    handleClick = (e) => {
        if (this.node.contains(e.target)) {
            return;
        }

        this.handleClickOutside();
    }

    handleClickOutside = () => {
        this.setState({
            priority: false,
            status: false,
            date: false,
            person: false,

        })
    }

    modalTypes = modalType => {
        switch (modalType) {
            case 'priority':
                return (
                    <div className="priority-container">
                        <div
                            name='High'
                            className="column-modal-button high-priority"
                        >
                            High
                        </div>
                        <div className="column-modal-button medium-priority">
                            Medium
                        </div>
                        <div className="column-modal-button low-priority">
                            Low
                        </div>
                    </div>
                )
            case 'status':
                return (
                    <div className="status-container">
                        <div className="column-modal-button done-status">
                            Done
                        </div>
                        <div className="column-modal-button in-progress-status" >
                            In Progress
                        </div>
                        <div className="column-modal-button on-hold-status">
                            On Hold
                        </div>
                    </div>
                )
            case 'start_date':
            case 'end_date':
                return (
                    <div className="date-container">
                        <DayPicker
                            selectedDays={this.props.selectedDay}
                            onDayClick={this.handleDayClick}
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

        const { modalType } = this.props;

        return (
            <div
                id={this.props.id}
                className={`column-modal-container ${this.props.selected ? "" : "hidden"}`}
                ref={node => this.node = node}
            >
                {this.modalTypes(modalType)}
            </div>
        )
    }
}


export default DashColumnPicker;