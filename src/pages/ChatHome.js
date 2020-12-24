import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchRooms } from "../reducers/rooms";
import { useInterval } from "../utils/hooks";
import RoomDetail from "../components/organisms/RoomDetail";
import UserInfo from "../components/molecules/UserInfo";
import RoomsList from "../components/molecules/RoomsList";
import "./ChatHome.css";

const ChatHome = (props) => {
  const [currentRoomId, setCurrentRoomId] = useState();
  const [currentTime, setCurrentTime] = useState(new Date());
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

  // cause a rerender every minute to update time online
  useInterval(() => {
    setCurrentTime(new Date());
  }, 60000);

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

  const minutesOnline = getMinutesElapsed(startTime, currentTime);
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

const getMinutesElapsed = (startTime, currentTime) => {
  // get timeDiff in ms
  const timeDiff = currentTime - startTime;
  // convert ms to minutes and round up
  return Math.ceil(timeDiff / 60000);
};

export default ChatHome;
