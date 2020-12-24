import React from "react";

const Button = ({ className = "", onClick, children, type = "action" }) => {
  return (
    <button className={["Button", className].join(" ")} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
