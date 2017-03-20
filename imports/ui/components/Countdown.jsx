import React, { Component, PropTypes } from 'react';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: {}
    };
  }

  getTimeRemaining(launch) {
    const t0 = launch.netstamp * 1000 - Date.parse(new Date())
    return {
      seconds: Math.floor((t0 / 1000) % 60),
      minutes: Math.floor((t0 / 1000 / 60) % 60),
      hours: Math.floor((t0 / (1000 * 60 * 60)) % 24),
      days: Math.floor(t0 / (1000 * 60 * 60 * 24)),
    }
  }

  padWithZeros(number) {
    return ('0' + number).slice(-2)
  }

  componentWillMount() {
    this.setState({ timeRemaining: this.getTimeRemaining(this.props.launch) })
  }

  componentDidMount() {
    const updateTime = setInterval(() => {
      this.setState({
        timeRemaining: this.getTimeRemaining(this.props.launch)
      })
    }, 500)
  }

  render() {
    const { launch } = this.props
    const { seconds, minutes, hours, days } = this.state.timeRemaining

    return (
      <div className="countdown-container">
        <div className="countdown-timer">
          <div>
            <div className="digits-container columns is-gapless is-mobile is-multiline">
              <div className="column is-half-mobile digits days">
                <div>{this.padWithZeros(days)}</div>
                <span>Days</span>
              </div>
              <div className="column is-half-mobile digits hours">
                <div>{this.padWithZeros(hours)}</div>
                <span>Hours</span>
              </div>
              <div className="column is-half-mobile digits minutes">
                <div>{this.padWithZeros(minutes)}</div>
                <span>Minutes</span>
              </div>
              <div className="column is-half-mobile digits seconds">
                <div>{this.padWithZeros(seconds)}</div>
                <span>Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Countdown;
