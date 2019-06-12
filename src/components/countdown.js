import React, { Component } from 'react'

export default class Countdown extends Component {
  constructor (props) {
    super(props)

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    }
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date)
      date ? this.setState(date) : this.stop()
    }, 1000)
  }

  componentWillUnmount () {
    this.stop()
  }

  calculateCountdown (endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000

    if (diff <= 0) return false

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0
    }

    if (diff >= 365.25 * 86400) {
      timeLeft.years = Math.floor(diff / (365.25 * 86400))
      diff -= timeLeft.years * 365.25 * 86400
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400)
      diff -= timeLeft.days * 86400
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600)
      diff -= timeLeft.hours * 3600
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60)
      diff -= timeLeft.min * 60
    }
    timeLeft.sec = diff

    return timeLeft
  }

  stop () {
    clearInterval(this.interval)
  }

  addLeadingZeros (value) {
    value = String(value)
    while (value.length < 2) {
      value = '0' + value
    }
    return value
  }

  renderNumber (value, interval) {
    return (
      <div className='flex flex-column'>
        <h1 className='f-subheadline-ns f1 ma0'>
          {this.addLeadingZeros(value)}
        </h1>
        <h3>{interval}</h3>
      </div>
    )
  }

  renderSeperator () {
    return <div className='flex flex-column f1 mh4-ns mh2 mh1 gold b'>:</div>
  }

  render () {
    const countDown = this.state

    return (
      <div className='flex items-center justify-center'>
        {this.renderNumber(
          countDown.days,
          countDown.days === 1 ? 'Jour' : 'Jours'
        )}

        {this.renderSeperator()}

        {this.renderNumber(countDown.hours, 'Heures')}

        {this.renderSeperator()}

        {this.renderNumber(countDown.min, 'Min')}

        {this.renderSeperator()}

        {this.renderNumber(countDown.sec, 'Sec')}
      </div>
    )
  }
}
