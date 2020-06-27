import React from "react";
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
  left: 0vw;
  top: 0vh;
  position: fixed;
`;

export const MenuBar = styled.div`
  top: 0vh;
  width: 130vw;
  height: 5vh;
  background-image: url(${menubarBackground});
`;

export const ClickerContainer = styled.div`
  left: 42vw;
  top: 10vh;
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
