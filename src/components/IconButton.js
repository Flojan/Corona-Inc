import React from "react";
import styled from "styled-components";
import backgroundImage from "../images/greybackground.png";
import icon from "../images/diseaseicon.png";

export const StyledIconButton = styled.button`
  /* background-image: url(${backgroundImage}); */
  color: white; 
  position: relative;
  width: 450px;
  height: 60px;
  &:hover {
    border-color: red;
  }
`;

export const IconImage = styled.img`
  width: 45px;
  height: 45px;
  position: absolute;
  top: 5px;
  left: 10px;
`;

const Button = ({ id, children, onClick }) => (
  <StyledIconButton id={id} onClick={onClick}>
    {children}
    <IconImage src={icon} />
    <div>
      Hello <br></br> 100
    </div>
    <div align="right">
      Test <br></br> 100
    </div>
  </StyledIconButton>
);

export default Button;
