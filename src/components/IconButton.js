import React, { useState } from "react";
import styled from "styled-components";
import backgroundImage from "../images/greybackground.png";

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
  display: flex;
  flex-direction: column;
`;

export const IconImage = styled.img`
  width: 45px;
  height: 45px;
`;

const IconButton = ({ text, icon, id, onClick }) => {
  //console.log("IconButton -> icon", icon);
  const [count] = useState(0);

  return (
    <StyledIconButton onClick={onClick}>
      <IconImage src={require(`../images/icons/sympthome/${icon}.png`)} />
      <StyledDiv>
        <span>{text}</span>
        <span>15</span>
      </StyledDiv>
      <StyledDiv>{count}</StyledDiv>
    </StyledIconButton>
  );
};

export default IconButton;
