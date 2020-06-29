import React, { useState } from "react";
import styled from "styled-components";
import backgroundImage from "../images/greybackground.png";

//Form des Icons Buttons
export const StyledIconButton = styled.button`
  background-image: url(${backgroundImage});
  position: relative;
  width: 25vw;
  height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    border-color: red;
  }
`;
//Div für die Darstellung der Namen und des nextPrices
export const StyledDiv = styled.div`
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
`;

//Styled image für die Darstellung des Icons vorne
export const IconImage = styled.img`
  width: 3vw;
  height: 5vh;
`;

const IconButton = ({ text, icon, cost, amount, onClick }) => {
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
        <span>{cost}</span>
      </StyledDiv>
      <StyledDiv>{amount}</StyledDiv>
    </StyledIconButton>
  );
};

export default IconButton;
