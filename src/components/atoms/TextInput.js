import React from "react";
import classnames from "classnames";
import "./TextInput.css";

const TextInput = ({ className = "", onChange, name, value, placeholder }) => {
  return (
    <input
      className={classnames("TextInput", className)}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default TextInput;
