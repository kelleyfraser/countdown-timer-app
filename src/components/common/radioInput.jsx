import React from "react";

const RadioInput = ({name, label}) => {
  return (
    <div className="form-check">
      <input className="form-check-input" type="radio" name={name} />
      <label className="form-check-label" htmlFor="years">{label}</label>
    </div>
  );
}

export default RadioInput;