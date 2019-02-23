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

  modalTypes = mt => {
    const {props: { modalType, dropdownChange, cellID, handleDayClick }} = this;
    switch (mt) {
      case 'priority':
        return (
          <div
            className="priority-container"
            onClick={this.stopPropagation}
          >
            <div
              name='High'
              className="column-modal-button high-priority"
              onClick={e => dropdownChange(modalType, cellID, 'high-priority', 'High', e)}
            >
              High
            </div>
            <div
              className="column-modal-button medium-priority"
              onClick={() => dropdownChange(modalType, cellID, 'medium-priority', 'Medium')}
            >
              Medium
            </div>
            <div
              className="column-modal-button low-priority"
              onClick={() => dropdownChange(modalType, cellID, 'low-priority', 'Low')}
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
            <div
              className="column-modal-button done-status"
              onClick={() => dropdownChange(modalType, cellID, 'done-status', 'Done')}
            >
              Done
            </div>
            <div
              className="column-modal-button in-progress-status"
              onClick={() => dropdownChange(modalType, cellID, 'in-progress-status', 'In Progress')}
            >
              In Progress
            </div>
            <div
              className="column-modal-button on-hold-status"
              onClick={() => dropdownChange(modalType, cellID, 'on-hold-status', 'On Hold')}
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
              onDayClick={ (a, b) => handleDayClick(a,b, modalType, cellID)}
            />
          </div>
        )
      case 'owner':
      case 'person':
        return '';
      default:
        return '';
    }
  }

  render() {
    const { modalType, selected } = this.props;
    return (
      <div
        id={this.props.id}
        className={`column-modal-container ${selected ? "" : "hidden"}`}
      >
        {this.modalTypes(modalType)}
      </div>
    )
  }
}

export default DashColumnPicker;