import React, { Component } from 'react'
import './StatBox.scss'

export default class StatBox extends Component {


  render() {
    const box = {
      class: this.props.class,
      title: this.props.title,
      col1number: this.props.col1number,
      col1title: this.props.col1title,
      col2number: this.props.col2number,
      col2title: this.props.col2title,
      col3number:this.props.col3number,
      col3title:this.props.col3title
    }
    return (
      <div>
        <div className = {box.class}>
          <div className = 'box-title'>
            <h2>{box.title}</h2>
            <h2>Last 60 days</h2>
          </div>
          <div className = 'col-container'> 

          <div className = 'box-col1'>
            {box.col1number}
            <br />
            {box.col1title}
          </div>
          <div className = 'box-col2'>
            {box.col2number}
            <br />
            {box.col2title}
          </div>
          <div className ='box-col3'>
            {box.col3number}
            <br />
            {box.col3title}
          </div>
          </div>
        </div>
      </div>
    )
  }
}
