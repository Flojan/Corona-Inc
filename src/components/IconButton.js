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

const IconButton = ({ text, icon, nextPrice, amount, onClick }) => {
  //console.log("IconButton -> icon", icon);
  const [count, setCount] = useState(0);
  const click = 1;

  const onHitClick = async () => {
    setCount(count + click);
  };

  return (
    //, onHitClick
    <StyledIconButton
      onClick={() => {
        onClick();
        onHitClick();
      }}
    >
      <IconImage src={require(`../images/icons/${icon}.png`)} />
      <StyledDiv>
        <span>{text}</span>
        <span>{nextPrice}</span>
      </StyledDiv>
      <StyledDiv>{amount}</StyledDiv>
    </StyledIconButton>
  );
};

export default IconButton;
