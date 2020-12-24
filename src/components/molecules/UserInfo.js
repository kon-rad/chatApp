import React from "react";
import Heading2 from "../atoms/Heading2";
import "./UserInfo.css";

const UserInfo = ({ username, minutesOnline }) => {
  const timeOnlineCopy = `${minutesOnline} minute${
    minutesOnline === 1 ? "" : "s"
  }`;
  return (
    <div className="UserInfo">
      <Heading2 className={"UserInfo__title"}>{username}</Heading2>
      <span className="UserInfo__time">Online for {timeOnlineCopy}</span>
    </div>
  );
};

export default UserInfo;
