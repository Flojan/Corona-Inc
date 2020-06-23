import React from "react";
import styled from "styled-components";
import backgroundImage from "../images/virusimage.png";

export const StyledHitButton = styled.button`
  background: url(${backgroundImage});
  background-position: center;
  background-size: 200px;
  border: none;
  text-align: center;
  font-size: 16px;
  width: 200px;
  height: 200px;
  margin: 5px;
  border-radius: 50%;
  &:hover {
    width: 250px;
  }
`;

const HitButton = ({ onClick }) => (
  <StyledHitButton onClick={onClick}></StyledHitButton> //props.children
);

export default HitButton;
