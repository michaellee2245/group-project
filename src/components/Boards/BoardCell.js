import React, { Component } from 'react';
import DashColumnPicker from '../DashColumnPicker/DashColumnPicker';
import axios from 'axios';

class BoardCell extends Component {
  state = {
    className: '',
    values: null
  }

  onDropdownChange = (col_name, id, class_name, values ) => {
    console.log(col_name,id);
    this.setState({
      className: class_name,
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

  render() {
    const { props: { item, col_name, ti, uc, s }, state: { values }} = this;
    return (
      <td
        className={`board-cell ${this.state.className}`}
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
        />
      </td>
    )
  }
}

export default BoardCell;