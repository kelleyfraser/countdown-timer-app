import React from "react";

const Input = ({type, name, label, onChange, value}) => {
  return (
    <div className="input-group mt-3">
      <input onChange={onChange} name={name} id={name} type={type} className="form-control" value={value} placeholder={label} />
    </div>
  );
}

export default Input;