import React from "react";

const Button = ({ className = "", handleOnClick, children }) => {
  return (
    <button className={["Button", className].join(" ")} onClick={handleOnClick}>
      {children}
    </button>
  );
};

export default Button;
