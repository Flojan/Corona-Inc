import React, { useState } from "react";
import Button from "./Button";
import TextInput from "./TextInput";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Useralert from "./Useralert";

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
  const [email, setEmail] = useState("def@default.com");
  const [password, setPw] = useState("1234");
  const [alertType, setAlertType] = useState(false);
  const [infoAlert, setInfoAlert] = useState("Info");
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
    sendRegister(email, password);
  };

  //Methode um den Login Click zu handeln
  const onLoginClick = (event) => {
    console.log("Login geklickt");
    event.preventDefault(); //Damit die Seite geladen wird nach dem Klick
    sendLogin(email, password);
  };

  const sendRegister = async (email, password) => {
    const response = await fetch(
      "http://server.bykovski.de:8000/users/register",
      {
        method: "POST",
        body: JSON.stringify({ username: email, password: password }),
      }
    );
    //console.log(await response.json())
    if (response.status === StatusCodeSuccessful) {
      setAlertType(true);
      setInfoAlert("Register successful");
      history.push("/game");
    } else {
      setInfoAlert("Register failed");
      setAlertType(false);
    }
  };

  const sendLogin = async (email, password) => {
    let details = { username: email, password: password };
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
    //console.log(await response.json())
    if (response.status === StatusCodeSuccessful) {
      setAlertType(true);
      setInfoAlert("Login successsful");
      actJWT = await response.json();
      actJWT = actJWT.access_token;
      sessionStorage.setItem("token", actJWT);
      console.log(sessionStorage.getItem("token"));
      history.push("/game");
    } else {
        setAlertType(true);
        setInfoAlert("Login faild");
    }
  };

  return (
    <StyledForm>
      <h1>Play now!</h1>
      {/* onChange um den Textinput auf änderungen abzuhören mit kurzer Arrowfunktion */}
      <TextInput
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="e-Mail Address"
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
      <Useralert type={alertType}
                 info={infoAlert} 
                 >
      </Useralert>
    </StyledForm>
  );
};

export default LoginForm;
