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
  const [cost, setCost] = useState(0); //Init über userData

  const upgrades = [
    { text: "Erbrechen", icon: "erbrechen", id: "1", cost: userData.cost },
    { text: "Husten", icon: "husten", id: "2", cost: userData.cost },
    { text: "Niesen", icon: "niesen", id: "3", cost: userData.cost },
    { text: "Vögel", icon: "vögel", id: "4", cost: userData.cost },
    { text: "Ratten", icon: "ratten", id: "5", cost: userData.cost },
    { text: "Moskitos", icon: "moskitos", id: "6", cost: userData.cost },
    { text: "Luft", icon: "luft", id: "7", cost: userData.cost },
    { text: "Wasser", icon: "wasser", id: "8", cost: userData.cost },
  ];

  async function buyUpgrade(id) {
    const url = upgradeUrl + id + "/buy";
    const response = await fetch(url, {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    });
    let data = await response.json();
    console.log("Upgrade Data", data);

    if (response.status === StatusCodeSuccessful) {
      const availiabeUpgradesUrl = upgradeUrl + "/available";
      const availableResponse = await fetch(availiabeUpgradesUrl, {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${token}`,
        }),
      });
      let availableUpgrades = await availableResponse.json();
      // Ist noch ein Object.
    }

    setCost(cost + 10);
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
