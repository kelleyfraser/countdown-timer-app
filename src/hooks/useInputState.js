import React, { useState } from 'react';

const useInputState = (initialValue) => {
  const [inputs, setInputs] = useState(initialValue);

  return {
    inputs,
    handleInputChange: (e) => {
      const value = e.target.value;
      const newInputs = { ...inputs, [e.target.name]: { ...inputs[e.target.name], value: value } };
      setInputs(newInputs);
    },
    resetInputs: () => {
      const newInputs = { ...inputs };
      for (let input in newInputs) {
        for (let key in newInputs[input]) {
          newInputs[input][key] = "";
        }
      }
      setInputs(newInputs);
    }
  };
};

export default useInputState;