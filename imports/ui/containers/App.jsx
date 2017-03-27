import React, { Component } from 'react';
import Header from '../components/Header.jsx';
import Countdown from '../containers/Countdown.jsx';
import LaunchListContainer from '../containers/LaunchListContainer.jsx';

import { getLaunches } from '../../api';

export default class App extends Component {
  state = {
    nextLaunch: {},
    launches: [],
  }

  componentDidMount() {
    getLaunches().then((json) => {
      this.setState({
        nextLaunch: json.launches[0],
        launches: json.launches
      });
      console.log(json);
    });
  }

  render() {
    let headerContents;

    if (Object.getOwnPropertyNames(this.state.nextLaunch).length === 0) {
      headerContents = <p className="title has-text-centered"><span>Retrieving Data</span></p>;
    } else {
      headerContents = <Countdown launch={this.state.nextLaunch} />;
    }

    return (
      <div>
        <Header />
        <section className="countdown hero is-medium">
          <div className="hero-body">
            <div className="container">
              {headerContents}
            </div>
          </div>
        </section>
        <section>
          <LaunchListContainer launches={this.state.launches} />
        </section>
      </div>
    );
  }
}
