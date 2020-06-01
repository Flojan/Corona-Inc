import React from "react";
import ReactDOM from "react-dom";
import Login from "./pages/Login";
import Game from "./pages/Game";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Redirect from="/" to="/game" />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
