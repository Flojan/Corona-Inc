import React, { useState } from "react";
import styled from "styled-components";
import { useStoreState } from "easy-peasy";
import clickersBackground from "../images/blackbackground.png";
import IconButton from "../components/IconButton";

export const UpgradesContainer = styled.div`
  width: 450px;
  height: 1000px;
  background-image: url(${clickersBackground});
  left: 0px;
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

const UpgradeArea = () => {
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
  );
};

export default UpgradeArea;
