import React, { Component, PropTypes } from 'react';

const getTimeRemaining = (launch) => {
  const t0 = launch.netstamp*1000 - Date.parse(new Date())
  return {
    seconds : Math.floor( (t0/1000) % 60 ),
    minutes : Math.floor( (t0/1000/60) % 60 ),
    hours : Math.floor( (t0/(1000*60*60)) % 24 ),
    days : Math.floor( t0/(1000*60*60*24) ),
  }
}

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: null
    };
  }

  componentDidMount() {
    const updateTime = setInterval( () => {
      this.setState({
        timeRemaining: getTimeRemaining(this.props.launch)
      })
    }, 1000)
  }

  render() {
    const { launch } = this.props
    const { seconds, minutes, hours, days } = this.state.timeRemaining || { seconds:"-", minutes:"-", hours:"-", days:"-" }

    return (
      <div className="container has-text-centered">
        <div className="content">
          <h2>{`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`}</h2>
        </div>
        <div className="content">
          <h3>{launch.name}</h3>
        </div>
      </div>
    );
  }
}

export default Countdown;
