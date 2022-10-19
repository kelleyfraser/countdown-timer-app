import React from "react";

const Input = ({type, name, label}) => {
  return (
    <div className="input-group mt-3">
      <input id={name} type={type} className="form-control" placeholder={label} />
    </div>
  );
}

export default Input;