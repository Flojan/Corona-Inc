import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: red;
  color: black;
  border: none;
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  width: 155px;
  margin: 5px;
  &:hover {
    background: white;
  }
`;

const Button = ({ id, children, onClick = () => {} }) => (
  <StyledButton id={id} onClick={onClick}>
    {children}
  </StyledButton> //props.children
);

export default Button;
