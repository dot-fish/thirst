import React, { Component } from 'react';

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    var eventTime= 1366549200; // Timestamp - Sun, 21 Apr 2013 13:00:00 GMT
var currentTime = 1366547400; // Timestamp - Sun, 21 Apr 2013 12:30:00 GMT
var diffTime = eventTime - currentTime;
var duration = moment.duration(diffTime*1000, 'milliseconds');
var interval = 1000;

setInterval(function(){
  duration = moment.duration(duration - interval, 'milliseconds');
    $('.countdown').text(duration.hours() + ":" + duration.minutes() + ":" + duration.seconds())
}, interval);
    return (  )
  }
}
 
export default CountDown;