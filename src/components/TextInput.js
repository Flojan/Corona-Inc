import React from "react";
import styles from "./../css/TextInput.css";

const TextInput = ({ type, id, placeholder }) => (
  <input
    type={type}
    id={id}
    placeholder={placeholder}
    className={styles.input}
  />
);

export default TextInput;
