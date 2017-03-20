import React, { Component } from 'react';

import { getTimeRemaining, padWithZeros } from '../../lib/countdown-helpers.js';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: {},
    };
  }

  componentWillMount() {
    this.setState({ timeRemaining: getTimeRemaining(this.props.launch) });
  }

  componentDidMount() {
    const updateTime = setInterval(() => {
      this.setState({
        timeRemaining: getTimeRemaining(this.props.launch)
      });
    }, 500);
  }

  render() {
    const { launch } = this.props;
    const { seconds, minutes, hours, days } = this.state.timeRemaining;
    let statusText;
    switch (launch.status) {
      case 1:
        statusText = 'Launch Status: GO';
        break;
      case 2:
        statusText = 'Launch Status: NO-GO';
        break;
      case 3:
        statusText = 'Launch Successful';
        break;
      case 4:
        statusText = 'Launch Failed :(';
        break;
      default:
        statusText = 'Countdown';
        break;
    }

    return (
      <div className="countdown-container is-clearfix">
        <div className="countdown-wrapper is-clearfix">
          <div>
            <div className="status has-text-centered">
              {statusText}
            </div>
            <div className="digits-container columns is-gapless is-mobile is-multiline">
              <div className="column is-half-mobile digits days">
                <div>{padWithZeros(days)}</div>
                <span>Days</span>
              </div>
              <div className="column is-half-mobile digits hours">
                <div>{padWithZeros(hours)}</div>
                <span>Hours</span>
              </div>
              <div className="column is-half-mobile digits minutes">
                <div>{padWithZeros(minutes)}</div>
                <span>Minutes</span>
              </div>
              <div className="column is-half-mobile digits seconds">
                <div>{padWithZeros(seconds)}</div>
                <span>Seconds</span>
              </div>
            </div>
            <div className="meta-container content">
              <p className="title has-text-centered">
                Mission: {launch.missions[0].name}
              </p>
              <p className="subtitle has-text-centered">
                Vehicle: {launch.rocket.name}
              </p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Countdown;
