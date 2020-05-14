import React from "react";
import logo from "./logo.svg";
import "./App.css";
import login from "./pages/loginpage/login";
//import game from "./pages/game";

function App() {
  const l = new login();
  return l.render();
}

export default App;
