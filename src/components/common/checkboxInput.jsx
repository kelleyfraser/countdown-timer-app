import React from "react";

const CheckboxInput = ({name, label, value, handleUnitChange}) => {
  return (
    <div className="form-check">
      <label className="form-check-label" htmlFor="years">
      <input className="form-check-input" type="checkbox" name={name} onChange={handleUnitChange} checked={value} />
      {label}</label>
    </div>
  );
}

export default CheckboxInput;