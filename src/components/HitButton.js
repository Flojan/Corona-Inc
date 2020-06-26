import React from "react";
import styled, { keyframes } from "styled-components";
import backgroundImage from "../images/virusimage.png";

const spin = keyframes`
  from {transform: rotate(0deg);}
  to{transform:rotate(360deg);}
  duration:infinite;
`;

export const StyledHitButton = styled.button`
  background: url(${backgroundImage});
  border: none;
  background-size: 35vh;
  border-radius: 50%;
  width: 18vw;
  height: 35vh;
  animation: ${spin} 5s linear infinite;
`;

const HitButton = ({ onClick }) => (
  <StyledHitButton onClick={onClick}></StyledHitButton> //props.children
);

export default HitButton;
