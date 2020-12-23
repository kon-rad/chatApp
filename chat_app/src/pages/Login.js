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
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-md-12 posts__title">
          <TextInput
            name="username"
            className="username_input"
            handleOnChange={(e) => setUsername(e.target.value)}
          />
          <Button className="login_submit" handleOnClick={handleSubmit}>
            Join the DoorDash Chat!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
