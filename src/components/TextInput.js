import React from "react";
import styles from "./TextInput.module.css";

const TextInput = ({ type, id, placeholder }) => (
  <input
    type={type}
    id={"email"}
    placeholder={placeholder}
    className={styles.input}
  />
);

export default TextInput;
