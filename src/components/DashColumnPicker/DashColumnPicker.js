import React, { Component } from 'react';
import './dash-column-picker.scss';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


class DashColumnPicker extends Component {

    state = {
        priority: false,
        status: true,
        date: false,
        person: false,
        selectedDay: null,

    }

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

    render() {

        const { priority, status, date, person } = this.props;

        return (
                <div
                    className="column-modal-container"
                    ref={node => this.node = node}
                >

                    {priority ? (

                        <div className="priority-container">
                            <div
                                name='High'
                                className="column-modal-button high-priority"
                            > High
                        </div>
                            <div className="column-modal-button medium-priority"> Medium </div>
                            <div className="column-modal-button low-priority"> Low </div>
                        </div>

                    ) : null}

                    {status ? (

                        <div className="status-container">
                            <div className="column-modal-button done-status"> Done </div>
                            <div className="column-modal-button in-progress-status" > In Progress </div>
                            <div className="column-modal-button on-hold-status"> On Hold </div>
                        </div>

                    ) : null}

                    {date ? (
                        <div className="date-container">
                            <DayPicker
                                selectedDays={this.props.selectedDay}
                                onDayClick={this.handleDayClick}
                            />
                        </div>
                    ) : null}

                </div>

        )
    }
}

export default DashColumnPicker;