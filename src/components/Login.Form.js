import React, { useState } from "react";
import Button from "./Button";
import TextInput from "./TextInput";
import styles from "./../css/Login.Form.css";

const Form = () => (
  <div className="loginform">
    <form>
      <h1>Jetzt spielen!</h1>
      <div>
        <TextInput type="email" id="email" placeholder="E-Mail Adresse" />
      </div>
      <div>
        <TextInput type="password" id="password" placeholder="Passwort" />
      </div>
      <div className="loginformBtns">
        <Button id="registerBtn">Register</Button>
        <Button id="loginBtn">Login</Button>
      </div>
    </form>
  </div>
);

export default Form;
