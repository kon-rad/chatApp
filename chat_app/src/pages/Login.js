import React from "react";
import TextInput from "../components/atoms/TextInput";
import Button from "../components/atoms/Button";
import "./Login.css";

const Login = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-md-12 posts__title">
          <TextInput name="username" className="username_input" />
          <Button className="login_submit">Join the DoorDash Chat!</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
