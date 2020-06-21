import React, { useState } from "react";
import Button from "./Button";
import TextInput from "./TextInput";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Useralert from "./Useralert";
import { useStoreActions, action } from "easy-peasy";

export const StyledForm = styled.form`
  h1 {
    color: #fff;
  }
  h2 {
    color: #fff;
  }
  margin: 40px 0 40px 0px;
  Useralert {
    color: white;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const LoginForm = () => {
  /**
   * Erstellen der States. Damit Mail und PW gesetzt werden können und innerhalb von LoginForm
   * immer nutzbar. Mal mit einem Default zum schnellen testen initalisiert
   */
  const [username, setUsername] = useState("def@default.com");
  const [password, setPw] = useState("1234");
  const [alertType, setAlertType] = useState(false);
  const [infoAlert, setInfoAlert] = useState("Info");

  //GlobalStates für User-Token und current User Generators
  const setToken = useStoreActions((actions) => actions.user.setToken);
  const setGenerators = useStoreActions((actions) => actions.curGenerators.setCurGenerator);
  let actJWT = "";
  let history = useHistory();
  const StatusCodeSuccessful = 200;

  //Methode um der Click auf Register zu behandeln
  const onRegisterClick = (event) => {
    console.log("Register geklickt");
    event.preventDefault(); //Damit die Seite geladen wird nach dem Klick
    /**
     * Auf Tipp von Max statt <Link> um die Buttons zu machen(was nicht so super funktioniert hat)
     * https://reacttraining.com/react-router/web/api/Hooks/usehistory
     */
    sendRegister(username, password);
  };

  //Methode um den Login Click zu handeln
  const onLoginClick = (event) => {
    console.log("Login geklickt");
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
      setInfoAlert("Login successsful");

      //Token
      actJWT = await response.json();
      actJWT = actJWT.access_token;
      setToken(actJWT); // Setzen des Usertokens
      getCurrentGenerators();
      setTimeout(() => {
        history.push("/game");
      }, 1000);
    } else {
      setAlertType(true);
      setInfoAlert("Login failed");
    }
  };


  const getCurrentGenerators = async () => {
    let generatorDetails = { order: "", amount: 0 };
    const url = "http://server.bykovski.de:8000/generators/current-user";
    const response = await fetch(url, {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${actJWT}`,
      }),
    });
    console.log("Generator Response: ", await response.json());
    //TODO in Map umwandeln
    setGenerators(response);
  };

  return (
    <StyledForm>
      <h1>Play now!</h1>
      {/* onChange um den Textinput auf änderungen abzuhören mit kurzer Arrowfunktion */}
      <TextInput
        type="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <TextInput
        type="password"
        value={password}
        onChange={(e) => setPw(e.target.value)}
        placeholder="Password"
      />
      <ButtonContainer>
        <Button onClick={onRegisterClick}>Register</Button>
        <Button onClick={onLoginClick}>Login</Button>
      </ButtonContainer>
      <Useralert type={alertType} info={infoAlert}></Useralert>
    </StyledForm>
  );
};

export default LoginForm;
