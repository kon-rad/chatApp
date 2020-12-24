import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../components/atoms/TextInput";
import Button from "../components/atoms/Button";
import { loginUser } from "../reducers/currentUser";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!username) return;
    dispatch(loginUser(username));
    history.push("/chat");
  };
  // handle submit on enter key
  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      handleSubmit(event);
    }
  };
  // todo: support login on enter key
  return (
    <div className="Login__container">
      <div className="Login">
        <TextInput
          name="username"
          className="Login__input"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="Type your username..."
          onKeyDown={handleOnKeyDown}
        />
        <Button className="Login__submit" onClick={handleSubmit}>
          Join the DoorDash Chat!
        </Button>
      </div>
    </div>
  );
};

export default Login;
