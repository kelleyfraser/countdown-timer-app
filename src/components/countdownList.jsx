import React, {useState} from "react";
import CountdownCard from "./countdownCard";

const CountdownList = ({countdowns}) => {

  return (
    <div className="countdown-list container-fluid">
      {countdowns.map((countdown) => (
        <CountdownCard data={countdown} />
      ))}
    </div>
  );
}

export default CountdownList;