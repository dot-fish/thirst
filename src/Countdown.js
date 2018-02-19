import React, { Component } from 'react'

class CountDown extends Component {
  render() {
    const interval = 1000
    let now = 8

    console.log(Date.now())

    setInterval(() => {
      let next = now - 1
      console.log(next)
    }, interval)
    return <div />
  }
}

export default CountDown
