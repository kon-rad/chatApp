import React from "react";
import classNames from "classnames";
import "./Button.css";

const stylesheet = {
  action: "Button__action",
  link: "Button__link",
};

const Button = ({ className = "", onClick, children, type = "action" }) => {
  return (
    <button
      className={classNames(stylesheet[type], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
