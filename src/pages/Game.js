import React from "react";
import styled from "styled-components";
import HitArea from "../container/HitArea";
import containerBackground from "../images/greybackground2.png";
import menubarBackground from "../images/coronaincbackground2.png";
import GeneratorArea from "../container/GeneratorArea";
import UpgradeArea from "../container/UpgradeArea";
import { useStoreState } from "easy-peasy";

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
  color: white;
  position: fixed;
`;

export const ClickerContainer = styled.div`
  left: 42vw;
  top: 10vh;
  position: fixed;
`;


const Game = () => {
  const username = useStoreState((state) => state.curUsername.username)
  console.log("USERNAME", username);
  if (!username) {
    return null;
  }
  return (
    <Container>
      <MenuBar><h3>{"Willkommen " + username}</h3></MenuBar>
      <GeneratorArea></GeneratorArea>
      <UpgradeArea></UpgradeArea>
      <ClickerContainer>
        <HitArea></HitArea>
      </ClickerContainer>
    </Container>
  );
};

export default Game;