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
  const generatorUrl = "http://server.bykovski.de:8000/generators/";
  const upgradeUrl = "http://server.bykovski.de:8000/upgrades/";
  const StatusCodeSuccessful = 200;
  const token = useStoreState((state) => state.user.token);
  const userData = useStoreState((state) => state.curGenerators.details);
  // Zugriff auf Amounts per userData[_generatorID_]
  const [count, setCount] = useState(0);

  const upgrades = [
    { text: "Erbrechen", icon: "erbrechen", id: "1" },
    { text: "Husten", icon: "husten", id: "2" },
    { text: "Niesen", icon: "niesen", id: "3" },
    { text: "Vögel", icon: "vögel", id: "4" },
    { text: "Ratten", icon: "ratten", id: "5" },
    { text: "Moskitos", icon: "moskitos", id: "6" },
    { text: "Luft", icon: "luft", id: "7" },
    { text: "Wasser", icon: "wasser", id: "8" },
  ];

  const generators = [
    { text: "Schlafstörung", icon: "schlafstörung", id: "1" },
    { text: "Bauchschmerzen", icon: "bauchschmerzen", id: "2" },
    { text: "Paranoia", icon: "paranoia", id: "3" },
    { text: "Ausschlag", icon: "ausschlag", id: "4" },
    { text: "Herzrasen", icon: "herzrasen", id: "5" },
    { text: "Abzesse", icon: "abzesse", id: "6" },
    { text: "Tumor", icon: "tumor", id: "7" },
    { text: "Lähmung", icon: "lähmung", id: "8" },
    { text: "Lungenentzündung", icon: "lungenentzündung", id: "9" },
    { text: "Aneurysma", icon: "aneurysma", id: "10" },
    { text: "Lungenfibrose", icon: "lungenfibrose", id: "11" },
    { text: "Herzversagen", icon: "herzversagen", id: "12" },
    //keine id für 13
  ];

  async function buyGenerator(id) {
    const url = generatorUrl + id + "/buy";
    const response = await fetch(url, {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    });
    //console.log("Buy Gen Server Response", await response.json());
    let data = await response.json();
    let amount = data.amount; //Amount für current Generator

    if (response.status === StatusCodeSuccessful) {
      const nextPriceUrl = generatorUrl + id + "/next-price";
      const nextPriceResponse = await fetch(nextPriceUrl, {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${token}`,
        }),
      });
      let nextPrice = await nextPriceResponse.json(); //Hier ist der Next Price drin
    }

    setCount(count + 10);
  }

  async function buyUpgrade(id) {
    const url = upgradeUrl + id + "/buy";
    const response = await fetch(url, {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    });
    console.log("Buy Upg Server Response", await response.json());

    setCount(count + 10);
  }

  return (
    <Container>
      <MenuBar></MenuBar>
      <GeneratorContainer>
        <StyledHeadlines>Symptome</StyledHeadlines>
        {generators.map((generator, index) => {
          return (
            <IconButton
              key={index}
              text={generator.text}
              icon={generator.icon}
              id={generator.id}
              //amount={}
              onClick={() => buyGenerator(generator.id)}
            />
          );
        })}
      </GeneratorContainer>
      <UpgradesContainer>
        <StyledHeadlines>Übertragung</StyledHeadlines>
        {upgrades.map((upgrade, index) => {
          return (
            <IconButton
              key={index}
              text={upgrade.text}
              icon={upgrade.icon}
              id={upgrade.id}
              onClick={() => buyUpgrade(upgrade.id)}
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
