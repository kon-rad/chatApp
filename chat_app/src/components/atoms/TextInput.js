import React from "react";

const TextInput = ({ className = "", handleOnChange, name }) => {
  return (
    <input
      className={["TextInput", className].join(" ")}
      onChange={handleOnChange}
      name={name}
    />
  );
};

export default TextInput;
