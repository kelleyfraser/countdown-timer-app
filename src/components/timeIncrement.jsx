import React from 'react';

const TimeIncrement = ({time, unit}) => {
  return (
        <div className="time-container">
          <h1 className="is-white-text">{time}</h1>
          <p className="is-primary-text">{unit}</p>
        </div>
  );
}

export default TimeIncrement;