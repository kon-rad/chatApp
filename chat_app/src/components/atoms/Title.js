import React from "react";

const Title = ({ classNames = [], children }) => {
  return <h1 className={["title", ...classNames].join(" ")}>{children}</h1>;
};

export default Title;
