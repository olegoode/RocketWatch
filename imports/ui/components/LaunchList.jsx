import React from 'react';
import LaunchListItem from '../components/LaunchListItem.jsx';

const LaunchList = (props) => {
  let { launches } = props;
  return (
    <div className="launch-list">
      {launches.map( (launch) => {
        return <LaunchListItem key={launch.id} {...launch} />;
      })}
    </div>
  );
};

export default LaunchList;
