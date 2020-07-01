import React from "react";
import styled, { keyframes } from "styled-components";
import backgroundImage from "../images/virusimage.png";

const spin = keyframes`
  from {transform: rotate(0deg);}
  to{transform:rotate(360deg);}
  duration: infinite;
`;

export const StyledHitButton = styled.button`
  background: url(${backgroundImage});
  border: 0;
  outline: none;
  background-size: 35vh;
  background-repeat: no-repeat;
  min-width: 18vw;
  min-height: 35vh;
  animation: ${spin} 5s linear infinite;

  /* &:hover {
    color: blue;
    transform: translateY(100px);
  } */

  /* Click-Animation */
  /* &:after {
    content: "";
    background: #90ee90;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }

  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  } */
`;

const HitButton = ({ onClick }) => (
  <StyledHitButton onClick={onClick}></StyledHitButton>
);

export default HitButton;
