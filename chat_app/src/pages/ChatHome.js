import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchRooms } from "../reducers/rooms";
import "./ChatHome.css";

const ChatHome = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(fetchRooms());
  }, []);
  const username = useSelector((state) => state.currentUser.username);
  const isLoggedIn = useSelector((state) => state.currentUser.isLoggedIn);
  // user must log in before being allowed to navigate to chat page
  if (!isLoggedIn) history.push("/");

  let minutesOnline = 13;
  let timeOnlineCopy = `${minutesOnline} minutes`;
  return (
    <div className="ChatHome__container">
      <div className="ChatroomList">
        <div className="UserInfo">
          {username}
          <div className="UserInfo__time">Online for {timeOnlineCopy}</div>
        </div>
      </div>
      <div className="Chatroom__mainContainer">
        <div className="Chatroom__main">
          <div className="Chatroom__title">Rooom Name</div>
          <div className="Chatroom__users">users list ...</div>
        </div>
        <div className="Messages__list">messages list ...</div>
        <div className="UserInput__container">user input send button</div>
      </div>
    </div>
  );
};

export default ChatHome;
