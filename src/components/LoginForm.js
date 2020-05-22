import React, { useState } from "react";
import Button from "./Button";
import TextInput from "./TextInput";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export const StyledForm = styled.form`
  h1 {
    color: #fff;
  }
  h2 {
    color: #fff;
  }
  margin: 40px 0 40px 0px;
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
  const [email, setEmail] = useState('def@default.com')
  const [password, setPw] = useState('1234')
  let history = useHistory()
  
  //Methode um der Click auf Register zu behandeln
  const onRegisterClick = (event) => {
    console.log("Register geklickt")
    event.preventDefault() //Damit die Seite geladen wird nach dem Klick
    /**
     * Auf Tipp von Max statt <Link> um die Buttons zu machen(was nicht so super funktioniert hat)
     * https://reacttraining.com/react-router/web/api/Hooks/usehistory
     */
    history.push("/game")
  }

  //Mathoe um den Login Click zu handeln
  const onLoginClick = (event) => {
    console.log("Login geklickt")
    event.preventDefault() //Damit die Seite geladen wird nach dem Klick
    history.push("/game")
  }

  return (
  <StyledForm>
    <h1>Play now!</h1>
    {/* onChange um den Textinput auf änderungen abzuhören mit kurzer Arrowfunktion */}
    <TextInput type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="e-Mail Address" />
    <TextInput type="password" value={password} onChange={e => setPw(e.target.value)} placeholder="Password" />
    <ButtonContainer>
      <Button onClick={onRegisterClick}>Register</Button>
      <Button onClick={onLoginClick}>Login</Button>
    </ButtonContainer>
  </StyledForm>
  );
};

export default LoginForm;
