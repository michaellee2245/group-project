import React, { Component } from 'react';
import DashColumnPicker from '../DashColumnPicker/DashColumnPicker';
import axios from 'axios';

class BoardCell extends Component {
  state = {
    values: null
  }

  onDropdownChange = (col_name, id, class_name, values ) => {
    console.log(col_name,id);
    this.setState({
      values: values
    })
    document.activeElement.blur();
    axios.put(`/api/task/${col_name}`, {taskID:id, [col_name]:values})
  }

  handleDayClick = (day, { selected }) => {
    this.setState({
      values: selected ? undefined : day.toLocaleDateString()
    });
    document.activeElement.blur();
    axios.put(`/api/task/end_date`, {taskID:this.props.item.id, end_date:day.toLocaleDateString()})
  }
  returnClassName (values, col_name) {
    switch (col_name){
      case 'status':
        switch (values){
          case 'Done':
            return 'done-status';
          case 'In Progress':
            return 'in-progress-status';
          case 'On Hold':
            return 'on-hold-status';
          default:
            return '';
      }
      case 'priority':
        switch (values) {
          case 'High':
            return 'high-priority';
          case 'Medium':
            return 'medium-priority';
          case 'Low':
            return 'low-priority';
          default:
            return '';
        }
      case 'time_est':
        return 'time-est-input'
        
      default:
        return '';
    }
  }
  render() {
    const { props: { item, col_name, ti, uc, s }, state: { values }} = this;
    return (
      <td
        className={`board-cell ${this.returnClassName(values|| item[col_name], col_name)}`}
        tabIndex={ti}
        onClick={() => uc(col_name,item.name)}
      >
        {values ? values : item[col_name]}
        <DashColumnPicker
          id={`col-${item.id}-${col_name}`}
          modalType={col_name}
          selected={s}
          dropdownChange={this.onDropdownChange}
          cellID={item.id}
          handleDayClick={this.handleDayClick}
          selectedDay={this.props.selectedDay}
          item={this.props.item}
        />
      </td>
    )
  }
}

export default BoardCell;