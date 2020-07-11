import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStoreActions } from "easy-peasy";
import styled from "styled-components";

const ServerClient = () => {
  const [username, setUsername] = useState("MilkBoy94");
  const [password, setPw] = useState("MilkBoy94");
  const [alertType, setAlertType] = useState(false);
  const [infoAlert, setInfoAlert] = useState("Info");

  //GlobalStates für User-Token und current User Generators
  const setToken = useStoreActions((actions) => actions.user.setToken);
  const setUsernameGlobal = useStoreActions(
    (actions) => actions.curUsername.setCurUsername
  );
  let actJWT = "";
  let history = useHistory();
  const StatusCodeSuccessful = 200;

  //Methode um der Click auf Register zu behandeln
  const onRegisterClick = (event) => {
    event.preventDefault(); //Damit die Seite geladen wird nach dem Klick
    sendRegister(username, password);
  };

  //Methode um den Login Click zu handeln
  const onLoginClick = (event) => {
    event.preventDefault(); //Damit die Seite geladen wird nach dem Klick
    sendLogin(username, password);
  };

  const sendRegister = async (username, password) => {
    const response = await fetch(
      "http://server.bykovski.de:8000/users/register",
      {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
      }
    );
    if (response.status === StatusCodeSuccessful) {
      setAlertType(true);
      setInfoAlert("Register successful");
      setTimeout(() => {
        sendLogin(username, password);
      }, 1000);
    } else {
      setInfoAlert("Register failed");
      setAlertType(false);
    }
  };

  const sendLogin = async (username, password) => {
    let details = { username: username, password: password };
    let formBody = [];
    for (let prop in details) {
      let encodedKey = encodeURIComponent(prop);
      let encodedValue = encodeURIComponent(details[prop]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    const response = await fetch("http://server.bykovski.de:8000/users/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody,
    });
    if (response.status === StatusCodeSuccessful) {
      setAlertType(true);
      setInfoAlert("Login successful");
      actJWT = await response.json();
      actJWT = actJWT.access_token;
      setToken(actJWT); // Setzen des Usertokens
      setUsernameGlobal(username);
      setTimeout(() => {
        history.push("/game");
      }, 1000);
    } else {
      setAlertType(true);
      setInfoAlert("Login failed");
    }
  };
};

export default ServerClient;
