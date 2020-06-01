import React, { useState } from "react";
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
  display: flex;
  flex-direction: column;
`;

export const IconImage = styled.img`
  width: 45px;
  height: 45px;
`;

const Button = () => {
  const [count, setCount] = useState(0);
  const click = 1;

  const onHitClick = async () => {
    setCount(count + click);
  };

  return (
    <StyledIconButton onClick={onHitClick}>
      <IconImage src={icon} />
      <StyledDiv>
        <span>Lungenentzündung</span>
        <span>15</span>
      </StyledDiv>
      <StyledDiv> Clicks: {count}</StyledDiv>
    </StyledIconButton>
  );
};

export default Button;
