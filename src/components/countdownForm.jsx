import React from "react";
import Input from "./common/input";
import RadioGroup from "./common/radioGroup";

const CountdownForm = () => {
  return (
    <div className="form-container container-fluid text-center">
      <form>
        <Input name="name" label="Name" />
        <Input name="date" label="Date" type="date" />
        <Input name="time" label="Time" type="time" />
        <RadioGroup />
        <button type="submit" className="btn btn-primary">Add new countdown</button>
      </form>
    </div>
  );
}

export default CountdownForm;