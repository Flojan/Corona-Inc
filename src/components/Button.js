import React, { useState } from "react";
import styles from "./Button.module.css";

class Button extends React.Component {
  render() {
    return <button className={styles.button}>Login</button>; //props.children
  }
}

export default Button;
