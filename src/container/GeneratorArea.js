import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useStoreState } from "easy-peasy";
import clickersBackground from "../images/blackbackground.png";
import IconButton from "../components/IconButton";

export const GeneratorContainer = styled.div`
  width: 25vw;
  height: 105vh;
  background-image: url(${clickersBackground});
  left: 75vw;
  top: 5vh;
  position: fixed;
`;

export const StyledHeadlines = styled.h2`
  color: white;
  left: 0vw;
  top: 0vh;
  display: flex;
  justify-content: space-between;
`;

const GeneratorArea = () => {
  const generatorUrl = "http://server.bykovski.de:8000/generators/";
  const StatusCodeSuccessful = 200;
  const token = useStoreState((state) => state.user.token);
  const [curGenerators, setCurGenerators] = useState({});
  
  //const userData = useStoreState((state) => state.curGenerators.details);
  // Zugriff auf Amounts per userData[_generatorID_]
  const [curAmount, setAmount] = useState(0); //State setzen über userData
  const [curNextPrice, setNextPrice] = useState(0);
  const curCPS = useStoreState((state) => state.curCPS.cps);
  
  const getCurrentGenerators = async () => {
    const url = generatorUrl + "current-user";
    const response = await fetch(url, {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    });
    let data = await response.json();
    //console.log("DATASF", data);
    
    setCurGenerators(data);
  };

  useEffect(() => {
    getCurrentGenerators();
  }, [curCPS]);

  if (curGenerators.length !== 0 && typeof curGenerators.length !== 'undefined') {
    console.log("generator Amount ", curGenerators[0].amount);
  }
  const findUserGen = (id) => {
    if (curGenerators.length !== 0 && typeof curGenerators.length !== 'undefined') {
      if (curGenerators.length === 0) {
        return;
      }
      return curGenerators.find((userGen) => {
        return userGen.generator.id === id;
      });
    }
  };
  
  const generators = [
    { text: "Schlafstörung", icon: "schlafstörung", id: "1", amount: curGenerators.amount },
    { text: "Bauchschmerzen", icon: "bauchschmerzen", id: "2", amount: curGenerators.amount },
    { text: "Paranoia", icon: "paranoia", id: "3", amount: curGenerators.amount },
    { text: "Ausschlag", icon: "ausschlag", id: "4", amount: curGenerators.amount },
    { text: "Herzrasen", icon: "herzrasen", id: "5", amount: curGenerators.amount },
    { text: "Abzesse", icon: "abzesse", id: "6", amount: curGenerators.amount },
    { text: "Tumor", icon: "tumor", id: "12", amount: curGenerators.amount },
    { text: "Laehmung", icon: "lähmung", id: "7", amount: curGenerators.amount },
    { text: "Lungenentzündung", icon: "lungenentzündung", id: "8", amount: curGenerators.amount },
    { text: "Aneurysma", icon: "aneurysma", id: "9", amount: curGenerators.amount },
    { text: "Lungenfibrose", icon: "lungenfibrose", id: "10", amount: curGenerators.amount },
    { text: "Herzversagen", icon: "herzversagen", id: "11", amount: curGenerators.amount },
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
    console.log(data.amount); // hier erhalte ich auch den amount

    let amount = data.amount; //Amount für current Generator
    setAmount(amount);
    if (response.status === StatusCodeSuccessful) {
      const nextPriceUrl = generatorUrl + id + "/next-price";
      const nextPriceResponse = await fetch(nextPriceUrl, {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${token}`,
        }),
      });
      let nextPrice = await nextPriceResponse.json(); //Hier ist der Next Price drin
      console.log(nextPrice);
      setNextPrice(nextPrice);
    }
  }

  // obejkt erstellen als State GenPrices =>

  let buttons = null;
  if (curGenerators) {
    buttons = [];
    for (const generator of generators) {
      const userGen = findUserGen(generator.id);
      if (!userGen) {
        continue;
      }
      buttons.push(
        <IconButton
          key={generator.id}
          text={generator.text}
          icon={generator.icon}
          id={generator.id}
          nextPrice={curNextPrice}
          amount={userGen.amount}
          onClick={() => buyGenerator(generator.id)}
        />
      );
    }
  }

  return (
    <GeneratorContainer>
      <StyledHeadlines>Symptome</StyledHeadlines>
      {buttons}
    </GeneratorContainer>
  );
};

export default GeneratorArea;
