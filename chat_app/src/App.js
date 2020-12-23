import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import ChatHome from "./pages/ChatHome";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/chat">
          <ChatHome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
