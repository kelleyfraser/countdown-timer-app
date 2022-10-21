import React from "react";

const Input = ({type, name, label, onChange}) => {
  return (
    <div className="input-group mt-3">
      <input onChange={onChange} name={name} id={name} type={type} className="form-control" placeholder={label} />
    </div>
  );
}

export default Input;