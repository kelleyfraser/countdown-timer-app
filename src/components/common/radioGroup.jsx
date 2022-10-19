import React from "react";
import RadioInput from "./radioInput";

const RadioGroup = () => {
  return (
    <div className="time-unit-select">
      <RadioInput name="years" label="Years" />
      <RadioInput name="weeks" label="Weeks" />
      <RadioInput name="days" label="Days" />
      <RadioInput name="hours" label="Hours" />
      <RadioInput name="mins" label="Mins" />
      <RadioInput name="secs" label="Secs" />
    </div>
  );
}

export default RadioGroup;