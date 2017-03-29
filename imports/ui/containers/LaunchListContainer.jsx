import React, { Component } from 'react';

import LaunchList from '../components/LaunchList.jsx';

class LaunchListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launches: [],
      sort: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      launches: nextProps.launches
    });
  }

  render() {
    return (
      <div className="container">
        <LaunchList launches={this.props.launches} />
      </div>
    );
  }
}

export default LaunchListContainer;
