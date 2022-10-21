import React from 'react';
import TimeIncrement from './timeIncrement';

const CountdownCard = ({data}) => {
  return (
    <div className="card is-secondary-background">
      <h1 className="card-title is-primary-text">{data.name}</h1>
      <div className="card-content">
        {Object.entries(data.times).map(([time, num]) => (
          <TimeIncrement key={time} time={num} unit={time}/>
        ))}
      </div>
    </div>
  );
}

export default CountdownCard;