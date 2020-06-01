import React from "react";
import styled from "styled-components";
import backgroundImage from "../images/greybackground.png";
import icon from "../images/diseaseicon.png";

export const StyledIconButton = styled.button`
  background-image: url(${backgroundImage});
  position: relative;
  width: 450px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    border-color: red;
  }
`;

export const StyledDiv = styled.div`
  color: white;
  font-size: 20px;
  background: tomato;
  display: flex;
  flex-direction: column;
`;

export const IconImage = styled.img`
  width: 45px;
  height: 45px;
`;

const Button = ({ id, children, onClick }) => (
  <StyledIconButton id={id} onClick={onClick}>
    {children}
    <IconImage src={icon} />
    <StyledDiv>
      <span>Max</span>
      <span>100</span>
    </StyledDiv>
    <div>200</div>
  </StyledIconButton>
);

export default Button;
