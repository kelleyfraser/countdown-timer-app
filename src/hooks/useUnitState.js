import React, { useState } from 'react';

const useUnitState = (initialValue) => {
  const [units, setUnits] = useState(initialValue);

  return {
    units,
    handleUnitChange: (e) => {
      const isChecked = units[e.target.name].checked;
      const newUnits = { ...units, [e.target.name]: { ...units[e.target.name], checked: !isChecked } };
      setUnits(newUnits);
    },
    resetUnits: () => {
      const newUnits = {...units};
      for (let unit in newUnits) {
        for (let key in newUnits[unit]) {
          if (key === "checked") {
            newUnits[unit][key] = false;
          }
        }
      }
      setUnits(newUnits);
    }
  };
};

export default useUnitState;