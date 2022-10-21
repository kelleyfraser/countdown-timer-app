import React from "react";
import CheckboxInput from "./checkboxInput";

const CheckboxGroup = ({units, handleUnitChange}) => {

  return (
    <div className="time-unit-select">
      {
        Object.keys(units).map((unit) => {
          return (
          <CheckboxInput key={units[unit].name} value={units[unit].checked} name={units[unit].name} label={units[unit].label} handleUnitChange={handleUnitChange} />
          );
        })
      }
    </div>
  );
}

export default CheckboxGroup;