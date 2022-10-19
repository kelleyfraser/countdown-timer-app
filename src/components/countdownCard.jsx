import React from 'react';
import TimeIncrement from './timeIncrement';

const CountdownCard = () => {
  return (
    <div className="countdown-list container-fluid">
      <div className="card is-secondary-background">
        <h1 className="card-title is-primary-text">Countdown 1</h1>
        <div className="card-content">
          <TimeIncrement time={100} unit={"days"} />
          <TimeIncrement time={4} unit={"hours"} />
          <TimeIncrement time={30} unit={"mins"} />
          <TimeIncrement time={55} unit={"secs"} />
        </div>
      </div>
    </div>
  );
}

export default CountdownCard;