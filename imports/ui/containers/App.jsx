import React, { Component } from 'react';
import Header from '../components/Header.jsx';
import Countdown from '../containers/Countdown.jsx';

import { getLaunches } from '../../api';

export default class App extends Component {
  state = {
    nextLaunch: {},
  }

  componentDidMount() {
    getLaunches().then((json) => {
      this.setState({
        nextLaunch: json.launches[0],
      });
    });
  }

  render() {
    let contents;

    if (Object.getOwnPropertyNames(this.state.nextLaunch).length === 0) {
      contents = <p className="title has-text-centered"><span>Retrieving Data</span></p>;
    } else {
      contents = <Countdown launch={this.state.nextLaunch} />;
    }

    return (
      <div>
        <Header />
        <section className="countdown hero is-medium">
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
