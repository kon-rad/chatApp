import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchRooms } from "../reducers/rooms";
import ChatRoomDetail from "../components/organisms/ChatRoomDetail";
import "./ChatHome.css";

const ChatHome = (props) => {
  const { roomId, setRoomId } = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(fetchRooms());
  }, []);
  const username = useSelector((state) => state.currentUser.username);
  const isLoggedIn = useSelector((state) => state.currentUser.isLoggedIn);
  const chatRoomNames = useSelector((state) =>
    state.rooms.data.map((r) => r.name)
  );
  const chatRooms = useSelector((state) => state.rooms.data);
  console.log("chatRooms", chatRooms, roomId);
  // user must log in before being allowed to navigate to chat page
  if (!isLoggedIn) history.push("/");
  let currentRoom;
  // check if rooms have loaded
  if (chatRooms.length > 0) {
    // if roomId is not set, default to the first room in list
    if (roomId === undefined) {
      currentRoom = chatRooms[0];
    } else {
      currentRoom = chatRooms.find((room) => room.id === roomId);
    }
  }
  console.log("currentRoom", currentRoom);

  let minutesOnline = 13;
  let timeOnlineCopy = `${minutesOnline} minutes`;
  return (
    <div className="ChatHome__container">
      <div className="ChatroomList">
        <div className="UserInfo">
          {username}
          <div className="UserInfo__time">Online for {timeOnlineCopy}</div>
        </div>
        <div className="ChatroomList__list">
          {chatRoomNames.map((name, i) => (
            <div key={`${name}_${i}`} className="ChatroomList__name">
              {name}
            </div>
          ))}
        </div>
      </div>
      {currentRoom && <ChatRoomDetail {...currentRoom} />}
    </div>
  );
};

export default ChatHome;
