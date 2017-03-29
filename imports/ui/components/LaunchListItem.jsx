import React from 'react';

const LaunchListItem = (props) => {
  return (
    <li className="item">
      <div>
        <p className="title">{props.name}</p>
        <p className="subtitle">{props.windowstart}</p>
      </div>
      <div className="meta">
        <p><a alt={props.rocket.agencies[0].name + "website"} href={props.rocket.agencies[0].infoURL}>{props.rocket.agencies[0].name}</a></p>
        <p>{props.location.name}</p>
      </div>
    </li>
  );
};

export default LaunchListItem;
