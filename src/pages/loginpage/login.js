import React, { useState } from "react";
import Button from "../../components/Button";
import styles from "./login.module.css";

class login {
  /*
    const [log, setLog] = useState(False);
    checkLogin = () => {
        setLog(True)
    } */

  render() {
    return (
      <div>
        <form>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="DaniWiese@example.com"
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your Password"
            required
          />
          <Button>Login</Button>
          <Button>Register</Button>
        </form>
      </div>
    );
  }
}

export default login;
