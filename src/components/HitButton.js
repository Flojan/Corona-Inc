import React from "react";
import styled from "styled-components";
import backgroundImage from "../images/virusimage.png";

export const StyledButton = styled.button`
  /* background-color: #ff0000; */
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: 200px;
  border: none;
  text-align: center;
  font-size: 16px;
  width: 200px;
  height: 200px;
  margin: 5px;
  border-radius: 50%;
`;

const HitButton = ({ id, children, onClick = () => {} }) => (
  <StyledButton id={id} onClick={onClick}>
    {children}
  </StyledButton> //props.children
);

export default HitButton;
