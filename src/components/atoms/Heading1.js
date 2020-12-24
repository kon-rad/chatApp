import React from "react";

const Heading1 = ({ classNames = [], children }) => {
  return <h1 className={["title", ...classNames].join(" ")}>{children}</h1>;
};

export default Title;
