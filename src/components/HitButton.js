import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #ff0000;
  color: black;
  border: none;
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  width: 200px;
  height: 200px;
  margin: 5px;
  border-radius: 50%;
  &:hover {
    background: #ff4040;
  }
`;

const HitButton = ({ id, children, onClick = () => {} }) => (
  <StyledButton id={id} onClick={onClick}>
    {children}
  </StyledButton> //props.children
);

export default HitButton;
