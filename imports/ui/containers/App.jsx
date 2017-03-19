import React, { Component } from 'react';
import Header from '../components/Header.jsx';
import Countdown from '../components/Countdown.jsx';

import { getLaunches } from '../../api';

export default class App extends Component {
  state = {
    nextLaunch: {}
  }

  componentDidMount() {
    getLaunches().then( (json) => {
      this.setState({
        nextLaunch: json.launches[0]
      })
    })
  }
  

  render() {
    return (
      <div>
        <Header />
        <section className="hero is-fullheight">
          <div className="hero-body">
            <Countdown launch={this.state.nextLaunch} />
          </div>
        </section>
      </div>
    );
  }
}
