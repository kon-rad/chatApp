import React from "react";
import classnames from "classnames";
import "./RoomsList.css";

const RoomsList = ({ rooms = [], currentRoomName, onClick }) => {
  if (rooms.length === 0) {
    return null;
  }
  return (
    <div className="RoomsList">
      {rooms.map(({ name, id }) => (
        <div
          key={`${name}_${id}`}
          className={classnames(
            "RoomsList__item",
            name === currentRoomName ? "active" : false
          )}
          onClick={() => onClick(id)}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default RoomsList;
