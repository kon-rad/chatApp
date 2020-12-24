import React from "react";
import classNames from "classnames";
import "./Message.css";

const Message = ({ className, author, isCurrentUser, children }) => {
  return (
    <div
      className={classNames(
        isCurrentUser ? "Message__current" : "Message",
        className
      )}
    >
      <div className={isCurrentUser ? "Message__bodyCurrent" : "Message__body"}>
        {children}
      </div>
      {isCurrentUser ? null : <div className="Message__author">{author}</div>}
    </div>
  );
};

export default Message;
