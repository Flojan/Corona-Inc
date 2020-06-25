import React, { useState } from "react";
import styled from "styled-components";
import HitArea from "../container/HitArea";
import containerBackground from "../images/greybackground2.png";
import menubarBackground from "../images/coronaincbackground2.png";
import GeneratorArea from "../container/GeneratorArea";
import UpgradeArea from "../container/UpgradeArea";

export const Container = styled.div`
  background-image: url(${containerBackground});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  left: 0px;
  top: 0px;
  position: fixed;
`;

export const MenuBar = styled.div`
  top: 0px;
  width: 2000px;
  height: 50px;
  background-image: url(${menubarBackground});
`;

export const ClickerContainer = styled.div`
  left: 750px;
  top: 0px;
  position: fixed;
`;

const Game = () => {
  return (
    <Container>
      <MenuBar></MenuBar>
      <GeneratorArea></GeneratorArea>
      <UpgradeArea></UpgradeArea>
      <ClickerContainer>
        <HitArea></HitArea>
      </ClickerContainer>
    </Container>
  );
};

export default Game;
