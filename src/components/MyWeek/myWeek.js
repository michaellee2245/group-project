import React, { Component } from 'react'
import './myWeek.scss'

export default class MyWeek extends Component {

  state = {
    prevWeek: [1,],
    nextWeek: [1, 2,],
    date: 'Feb 2 - Feb 8',
    username: 'Mr.user',
    upcomingAssignments: "You don't have any assignments this week",
    personFilter: '',
  }

  prevWeekCount = () => {
    return this.state.prevWeek.length
  }

  nextWeekCount = () => {
    return this.state.nextWeek.length
  }

  weekIndicator = () => {
    return this.state.date
  }

  greeting = () => {
    return this.state.username
  }

  upcoming = () => {
    return this.state.upcomingAssignments
  }

  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({ [key]: value })
  }



  render() {
    return (
      <div>
        <div className='personal-assistant-content-header'>
          <div className='weeks-navigator-container'>
            <div className='personal-assistant-weeks-navigator-component'>
              <div className='prev-week-button'>
                <span className='prev-week'>Previous week / </span>
                <span className='prevWeekCounter'> {this.prevWeekCount()}
                  <i class="material-icons" id='chevronLeft'>chevron_left</i>
                </span>
              </div>
              <div className='week-indicator-wrapper'>
                <span className='week-indicator'> {this.weekIndicator()}</span>
              </div>
              <div className='next-week-button'>
                <i class="material-icons" id='chevronRight'>chevron_right</i>
                <span className='next-week'>Next week / </span>
                <span className='nextWeekCounter'> {this.nextWeekCount()}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='personal-assistant-content-view'>
          <div className='personal-assistant-content-component'>
            <div className='header-container'>
              <div className='personal-assistant-header-component'>
                <img src="https://cdn.monday.com/assets/deadline/coffee_team.png" className='image-title' />
                <div className='pesonal-assistant-titles'>
                  <div className='first-title'>
                    <span className='greeting'>{this.greeting()}</span>
                  </div>
                  <div className='second-title'>
                    <span className='upcoming-assignments'>{this.upcoming()}</span>
                  </div>
                </div>
              </div>
              <div className='personal-assistant-filter-wrapper'>
                <div className='personal-assistant-filter-component'>
                  <div className='person-filter-input-wrapper'>
                    <div className='pure-input'>
                      <input value={this.state.personFilter} name='personFilter' onChange={this.handleChange} className='input person-filter-input' placeholder='Filter by person'></input>
                      <div className='tooltip'>
                        <i class="material-icons" id='person'>person_outline</i>
                        <span className='tooltiptext'>Search by person</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='deadlines-task-container'>
              <div className='deadline-tasks-section-component'>
                <div className='section-type-container'>
                  <span className='collapse-icon-wrapper'>
                    <div className='collapse-group-toggle-component'>
                      <i class="material-icons" id='arrowUp'>arrow_drop_up</i>
                      <i class="material-icons" id='arrowDown'>arrow_drop_down</i>
                    </div>
                  </span>
                  <div className='section-type-title-wrapper'>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
