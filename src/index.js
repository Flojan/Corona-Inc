import React from "react";
import ReactDOM from "react-dom";
import Login from "./pages/Login";
import Game from "./pages/Game";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { StoreProvider } from "easy-peasy";
import store from "./store/Store";
import GlobalStyle from "./globalstyles";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <GlobalStyle />
      <Router>
        <Redirect from="/" to="/login" />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
        </Switch>
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
