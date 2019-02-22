import React, { Component } from 'react';
import BoardCell from './BoardCell';

const columns = ['name',
  'owner',
  'priority',
  'status',
  'end_date',
  'person',
  'time_est'];

class BoardRow extends Component {

  columnMapper = (e,i) => {
    const { props: { item }} = this;
    return (
      <BoardCell
        key={i}
        col_name={e}
        item={item}
        ti={i + 7 * this.props.ti}
        uc={this.props.uc(item.id)}
        values=""
        s={this.props.checkSelected(item.id,e)}
        selectedDay={this.props.selectedDay}
      />
    )
  }

  render() {
    return (
      <tr className="board-row">
        {columns.map(this.columnMapper)}
      </tr>
    )
  }
}

export default BoardRow;
