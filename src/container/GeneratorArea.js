import React, { useState } from "react";
import styled from "styled-components";
import { useStoreState } from "easy-peasy";
import clickersBackground from "../images/blackbackground.png";
import IconButton from "../components/IconButton";

export const GeneratorContainer = styled.div`
  width: 450px;
  height: 1000px;
  background-image: url(${clickersBackground});
  left: 1310px;
  top: 50px;
  position: fixed;
`;

export const StyledHeadlines = styled.h2`
  color: white;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: space-between;
`;

const GeneratorArea = () => {
  const generatorUrl = "http://server.bykovski.de:8000/generators/";
  const StatusCodeSuccessful = 200;
  const token = useStoreState((state) => state.user.token);
  const userData = useStoreState((state) => state.curGenerators.details);
  // Zugriff auf Amounts per userData[_generatorID_]
  const [curAmount, setAmount] = useState(0); //State setzen über userData
  const [curNextPrice, setNextPrice] = useState(0);

  if (userData.length !== 0) {
    console.log("userdataaa: ", userData[0].amount);
  }

  const findUserGen = (id) => {
    if (userData.length === 0) {
      return;
    }
    return userData.find((userGen) => {
      return userGen.generator.id === id;
    });
  };

  const generators = [
    { text: "Schlafstörung", icon: "schlafstörung", id: "1", amount: userData.amount },
    { text: "Bauchschmerzen", icon: "bauchschmerzen", id: "2", amount: userData.amount },
    { text: "Paranoia", icon: "paranoia", id: "3", amount: userData.amount },
    { text: "Ausschlag", icon: "ausschlag", id: "4", amount: userData.amount },
    { text: "Herzrasen", icon: "herzrasen", id: "5", amount: userData.amount },
    { text: "Abzesse", icon: "abzesse", id: "6", amount: userData.amount },
    { text: "Tumor", icon: "tumor", id: "12", amount: userData.amount },
    { text: "Laehmung", icon: "lähmung", id: "7", amount: userData.amount },
    { text: "Lungenentzündung", icon: "lungenentzündung", id: "8", amount: userData.amount },
    { text: "Aneurysma", icon: "aneurysma", id: "9", amount: userData.amount },
    { text: "Lungenfibrose", icon: "lungenfibrose", id: "10", amount: userData.amount },
    { text: "Herzversagen", icon: "herzversagen", id: "11", amount: userData.amount },
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
  if (userData) {
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
