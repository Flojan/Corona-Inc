import React from "react";
import styles from "./../css/Button.css";

const Button = ({ id, children }) => (
  <button id={id}>{children}</button> //props.children
);

export default Button;
