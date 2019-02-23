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
      col3number: this.props.col3number,
      col3title: this.props.col3title
    }
    return (
      <div>
        <div className={box.class}>
          <div className='box-title'>
            <h2>{box.title}</h2>
            <h2>Last 60 days</h2>
          </div>
          <div className='col-container'>

            <div className='box-col'>
              <h1>{box.col1number}</h1>
              <h3>{box.col1title}</h3>
            </div>
            <div className='box-col'>
              <h1>{box.col2number}</h1>
              <h3>{box.col2title}</h3>
            </div>
            <div className='box-col'>
              <h1>{box.col3number}</h1>
              <h3>{box.col3title}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
