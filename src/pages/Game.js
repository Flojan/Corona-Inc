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


  async function buyGenerator (id) {
    const url = generatorUrl + id + "/next-price";
    const response = await fetch(url, {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    });
    console.log("Buy Gen Server Response", await response.json());
    
    setCount(count + 10);
  };
  return (
    <Container>
      <MenuBar></MenuBar>
      <GeneratorContainer>
        <StyledHeadlines>Generators</StyledHeadlines>
        <IconButton text="Erkältung" onClick={() => buyGenerator("1")}></IconButton>
        <IconButton text="Grippe"></IconButton>
        <IconButton text="Lungenentzündung"></IconButton>
        <IconButton text="Herzinfarkt"></IconButton>
        <IconButton text="Herzinfarkt"></IconButton>
      </GeneratorContainer>
      <UpgradesContainer>
        <StyledHeadlines>Upgrades</StyledHeadlines>
        <IconButton text="Husten"></IconButton>
        <IconButton text="Niesen"></IconButton>
        <IconButton text="Kotzen"></IconButton>
        <IconButton text="Kacken"></IconButton>
        <IconButton text="Pissen"></IconButton>
      </UpgradesContainer>
      <ClickerContainer>
        <HitArea></HitArea>
      </ClickerContainer>
    </Container>
  );
};

export default Game;
