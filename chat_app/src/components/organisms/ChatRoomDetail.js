import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoomsDetail } from "../../reducers/roomsDetail";
import "./ChatRoomDetail.css";

const ChatRoomDetail = ({ id, name, users, messages }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoomsDetail(id));
  }, []);
  // todo: add current user and make highlight style
  const userNamesList = useSelector(
    ({ roomsDetail }) => roomsDetail[id] && roomsDetail[id].users
  );

  return (
    <div className="Chatroom__mainContainer">
      <div className="Chatroom__main">
        <h1 className="Chatroom__title">{name}</h1>
        <div className="Chatroom__users">
          {userNamesList && userNamesList.map((name) => <div>{name}</div>)}
        </div>
      </div>
      <div className="Messages__list">messages list ...</div>
      <div className="UserInput__container">user input send button</div>
    </div>
  );
};

export default ChatRoomDetail;
