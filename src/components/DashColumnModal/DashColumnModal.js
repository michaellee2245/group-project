import React, { Component } from 'react';
import './dash-column-modal.scss';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


class DashColumnModal extends Component {

    handleDayClick = (day, { selected }) => {
        this.setState({
          selectedDay: selected ? undefined : day,
        });
      }

    render() {

        const { priority, status, date, person } = this.props;

        return (
            <div className="column-modal-container">

                {priority ? (

                    <div className="priority-container">
                        <div className="column-modal-button" id="high-priority"> High </div>
                        <div className="column-modal-button" id="medium-priority"> Medium </div>
                        <div className="column-modal-button" id="low-priority"> Low </div>
                    </div>

                ) : null}

                {status ? (

                    <div className="status-container">
                        <div className="column-modal-button" id="done-status"> Done </div>
                        <div className="column-modal-button" id="in-progress-status"> In Progress </div>
                        <div className="column-modal-button" id="on-hold-status"> On Hold </div>
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

export default DashColumnModal;