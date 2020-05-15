import React from "react";
import styles from "./Button.module.css";

const Button = ({ children }) => (
  <button className={styles.button}>{children}</button> //props.children
);

export default Button;
