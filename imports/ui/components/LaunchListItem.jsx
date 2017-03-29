import React from 'react';

const LaunchListItem = (props) => {
  const missionDesc = props.missions.length > 0 ? props.missions[0].description : 'No description available.';

  return (
    <li className="item">
      <div className="name">
        <p className="title">{props.name}</p>
        <p className="subtitle">{props.windowstart}</p>
      </div>
      <div className="meta">
        <p><a alt={props.rocket.agencies[0].name + "website"} href={props.rocket.agencies[0].infoURL} target="_blank">{props.rocket.agencies[0].name}</a></p>
        <p>{props.location.name}</p>
      </div>
      <div className="description content">
        <p>{missionDesc}</p>
      </div>
    </li>
  );
};

export default LaunchListItem;
