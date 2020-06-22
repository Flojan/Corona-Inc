import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import HitArea from "../components/HitArea";
import IconButton from "../components/IconButton";
import containerBackground from "../images/greybackground2.png";
import clickersBackground from "../images/blackbackground.png";
import menubarBackground from "../images/coronaincbackground2.png";
import { useStoreState } from "easy-peasy";

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

export const GeneratorContainer = styled.div`
  width: 450px;
  height: 1000px;
  background-image: url(${clickersBackground});
  left: 1310px;
  top: 50px;
  position: fixed;
`;

export const UpgradesContainer = styled.div`
  width: 450px;
  height: 1000px;
  background-image: url(${clickersBackground});
  left: 0px;
  top: 50px;
  position: fixed;
`;

export const ClickerContainer = styled.div`
  left: 750px;
  top: 0px;
  position: fixed;
`;

export const StyledHeadlines = styled.h2`
  color: white;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: space-between;
`;

const Game = () => {
  const [count, setCount] = useState(0);
  const token = useStoreState((state) => state.user.token);
  const generatorUrl = "http://server.bykovski.de:8000/generators/";
  const generators = [
    { text: "Husten", icon: "cough" },
    { text: "Dully", icon: "diseaseicon" },
  ]; //KEKW

  async function buyGenerator(id) {
    const url = generatorUrl + id + "/buy";
    const response = await fetch(url, {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    });
    console.log("Buy Gen Server Response", await response.json());

    setCount(count + 10);
  }
  return (
    <Container>
      <MenuBar></MenuBar>
      <GeneratorContainer>
        <StyledHeadlines>Generators</StyledHeadlines>
        {generators.map((generator, index) => {
          return (
            <IconButton
              key={index}
              text={generator.text}
              icon={generator.icon}
              onClick={() => buyGenerator("1")}
            />
          );
        })}
      </GeneratorContainer>
      <UpgradesContainer>
        <StyledHeadlines>Upgrades</StyledHeadlines>
        {generators.map((generator, index) => {
          return (
            <IconButton
              key={index}
              text={generator.text}
              icon={generator.icon}
              onClick={() => buyGenerator("1")}
            />
          );
        })}
      </UpgradesContainer>
      <ClickerContainer>
        <HitArea></HitArea>
      </ClickerContainer>
    </Container>
  );
};

export default Game;
