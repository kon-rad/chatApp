import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchRooms } from "../reducers/rooms";
import RoomDetail from "../components/organisms/RoomDetail";
import UserInfo from "../components/molecules/UserInfo";
import RoomsList from "../components/molecules/RoomsList";
import "./ChatHome.css";

const ChatHome = (props) => {
  const [currentRoomId, setCurrentRoomId] = useState();
  const history = useHistory();
  // user must log in before being allowed to navigate to chat page
  const isLoggedIn = useSelector((state) => state.currentUser.isLoggedIn);
  if (!isLoggedIn) history.push("/");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  const username = useSelector((state) => state.currentUser.username);
  const startTime = useSelector((state) => state.currentUser.startTime);

  const rooms = useSelector((state) => state.rooms.data);

  let currentRoom;
  // check if rooms have loaded
  if (rooms.length > 0) {
    // if currentRoomId is not set, default to the first room in list
    if (currentRoomId === undefined) {
      currentRoom = rooms[0];
    } else {
      currentRoom = rooms.find((room) => room.id === currentRoomId);
    }
  }

  const minutesOnline = getMinutesElapsed(startTime);
  return (
    <div className="ChatHome__container">
      <div className="ChatHome">
        <UserInfo username={username} minutesOnline={minutesOnline} />
        <RoomsList
          rooms={rooms}
          currentRoomName={currentRoom && currentRoom.name}
          onClick={(id) => setCurrentRoomId(id)}
        />
      </div>
      {currentRoom && (
        <RoomDetail {...currentRoom} currentUserName={username} />
      )}
    </div>
  );
};

const getMinutesElapsed = (startTime) => {
  const endTime = new Date();
  // get timeDiff in ms
  const timeDiff = endTime - startTime;
  // convert ms to minutes and round up
  return Math.ceil(timeDiff / 60000);
};

export default ChatHome;
