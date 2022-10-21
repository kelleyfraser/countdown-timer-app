import React, {useState} from "react";
import CountdownCard from "./countdownCard";

const CountdownList = ({countdowns}) => {

  return (
    <div className="countdown-list container-fluid">
      {countdowns.map((countdown) => (
        <CountdownCard key={countdown.name} data={countdown} />
      ))}
    </div>
  );
}

export default CountdownList;