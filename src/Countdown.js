import React, { Component } from 'react'
import moment from 'moment'

class CountDown extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    /**
     * @description DAY ZERO SOUTH AFRICA
     * @see http://www.timestampgenerator.com/1528156800/#result
    */
    const eventTime = 1528156800
    let currentTime = moment.now()
    let diffTime = currentTime - eventTime
    let duration = moment.duration(diffTime * 1000, 'milliseconds')
    let interval = 1000

    setInterval(function() {
      duration = moment.duration(duration - interval, 'milliseconds')
      let hours = duration.hours()
      let minutes = duration.minutes()
      let seconds = duration.seconds()
      console.log(duration, hours, minutes, seconds)
    }, interval)
    return <div className="countdown" />
  }
}

export default CountDown
