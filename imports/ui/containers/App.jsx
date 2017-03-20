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
    let contents

    if (Object.getOwnPropertyNames(this.state.nextLaunch).length === 0) {
      contents = <span>Loading...</span>
    } else {
      contents = <Countdown launch={this.state.nextLaunch} />
    }

    return (
      <div>
        <Header />
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container">
              {contents}              
            </div>
          </div>
        </section>
      </div>
    );
  }
}
