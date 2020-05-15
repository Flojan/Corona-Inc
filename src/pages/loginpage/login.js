import React, { useState } from "react";
import Button from "../../components/Button";
import styles from "./login.module.css";
import TextInput from "../../components/TextInput";

class login {
  /*
    const [log, setLog] = useState(False);
    checkLogin = () => {
        setLog(True)
    } */

  render() {
    return (
      <div className={styles.loginbackground}>
        <form>
          <TextInput
            type="email"
            id="email"
            placeholder="hans.peter@example.de"
          ></TextInput>
          <TextInput
            type="password"
            id="password"
            placeholder="Passwort"
          ></TextInput>
          <div className={styles.register}>
            <Button>Register</Button>
          </div>
          <div className={styles.login}>
            <Button>Login</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default login;

/*const login = ({ children }) => (
  <button className={styles.button}>{children}</button> //props.children
);

export default Login;*/
