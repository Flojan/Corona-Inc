import React from "react";
import styled from "styled-components";
import backgroundImage from "../images/virusimage.png";

export const StyledHitButton = styled.button`
  background: url(${backgroundImage});
  /* background-position: center; */
  background-size: 35vh;
  border: none;
  width: 18vw;
  height: 35vh;
  /* margin: 5px; */
  &:hover {
    width: 40vh;
  }
`;

const HitButton = ({ onClick }) => (
  <StyledHitButton onClick={onClick}></StyledHitButton> //props.children
);

export default HitButton;
