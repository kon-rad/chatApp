import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoomsDetail } from "../../reducers/roomsDetail";
import { fetchRoomMessages, postMessage } from "../../reducers/messages";
import { useInterval } from "../../utils/hooks";
import TextInput from "../atoms/TextInput";
import Message from "../atoms/Message";
import Button from "../atoms/Button";
import "./RoomDetail.css";

const RoomDetail = ({ id, name, currentUserName }) => {
  const dispatch = useDispatch();
  // fetch rooms detail and messages when room id prop changes
  useEffect(() => {
    dispatch(fetchRoomsDetail(id));
    dispatch(fetchRoomMessages(id));
  }, [id]);

  // polling for new messages
  useInterval(() => {
    dispatch(fetchRoomMessages(id));
  }, 1000);

  const [messageInputValue, setMessageInputValue] = useState("");
  const userNamesList = useSelector(
    ({ roomsDetail }) => roomsDetail[id] && roomsDetail[id].users
  );
  const messages = useSelector(({ messages }) => messages[id] && messages[id]);

  // scroll to bottom of messages list when messages are updated
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const messagesEndRef = useRef(null);

  const messageSubmit = () => {
    // dispatch thunk to post message
    dispatch(postMessage(id, currentUserName, messageInputValue));
    // clear message text state
    setMessageInputValue("");
    scrollToBottom();
  };
  // submit message on enter key
  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      messageSubmit();
    }
  };

  return (
    <div className="RoomDetail__container">
      <div className="RoomDetail__header">
        <h1 className="RoomDetail__title">{name}</h1>
        <div className="RoomDetail__users">
          <span className="RoomDetail__currentUserName">{currentUserName}</span>
          {userNamesList && userNamesList.length > 0 && ", "}
          {userNamesList &&
            userNamesList.filter((name) => name !== currentUserName).join(", ")}
        </div>
      </div>
      <div className="RoomDetail__messages">
        {messages &&
          messages.map((msg, i) => {
            return (
              <Message
                isCurrentUser={msg.name === currentUserName}
                author={msg.name}
                key={`${msg.name}_${i}`}
              >
                {msg.message}
              </Message>
            );
          })}
        <div ref={messagesEndRef} />
      </div>
      <div className="RoomDetail__inputContainer">
        <TextInput
          placeholder="Type a message..."
          name="message_input"
          value={messageInputValue}
          onChange={(e) => setMessageInputValue(e.target.value)}
          className="RoomDetail__textInput"
          onKeyDown={handleOnKeyDown}
        />
        <Button
          type="link"
          className="RoomDetail__submitButton"
          onClick={messageSubmit}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default RoomDetail;
