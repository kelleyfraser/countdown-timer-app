import React from "react";
import CountdownCard from "./countdownCard";

const CountdownList = () => {
  return (
    <div className="countdown-list container-fluid">
      <CountdownCard />
      <CountdownCard />
      <CountdownCard />
    </div>
  );
}

export default CountdownList;