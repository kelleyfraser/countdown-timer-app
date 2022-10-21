import React from "react";
import CheckboxGroup from "./common/checkboxGroup";
import Input from "./common/input";
import useInputState from "../hooks/useInputState";
import useUnitState from "../hooks/useUnitState";

const CountdownForm = ({saveCountdown}) => {

  const { inputs, handleInputChange, resetInputs } = useInputState({
    name: {
      name: "name",
      label: "Name",
      type: "text"
    },
    date: {
      name: "date",
      label: "Date",
      type: "date"
    },
    time: {
      name: "time",
      label: "Time",
      type: "time"
    }
  });

  const { units, handleUnitChange, resetUnits } = useUnitState({
    years:
    {
      name: "years",
      label: "Years",
      checked: false
    },
    weeks:
    {
      name: "weeks",
      label: "Weeks",
      checked: false
    },
    days:
    {
      name: "days",
      label: "Days",
      checked: false
    },
    hours:
    {
      name: "hours",
      label: "Hours",
      checked: false
    },
    mins:
    {
      name: "mins",
      label: "Mins",
      checked: false
    },
    secs:
    {
      name: "secs",
      label: "Secs",
      checked: false
    }
  });

  return (
    <div className="form-container container-fluid text-center">
      <form>
        {
          Object.keys(inputs).map((input) => {
            return (
              <Input name={inputs[input].name} label={inputs[input].label} value={inputs[input].value} key={inputs[input].name} type={inputs[input].type} onChange={handleInputChange} />
            )
          })
        }
        <CheckboxGroup units={units} handleUnitChange={handleUnitChange} />
        <button onClick={(e) => {e.preventDefault(); saveCountdown(inputs, units); resetInputs(); resetUnits();} } type="submit" className="btn btn-primary">Add new countdown</button>
      </form>
    </div>
  );
}

export default CountdownForm;