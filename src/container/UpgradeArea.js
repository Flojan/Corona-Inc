import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useStoreState } from "easy-peasy";
import clickersBackground from "../images/blackbackground.png";
import IconButton from "../components/IconButton";

export const UpgradesContainer = styled.div`
  width: 25vw;
  height: 105vh;
  background-image: url(${clickersBackground});
  left: 0vw;
  top: 5vh;
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

  const token = useStoreState((state) => state.user.token);
  const [curUpgrades, setCurUpgrades] = useState({});
  const [availableUpgs, setAvailableUpgs] = useState({});
  const [curAmount, setAmount] = useState(0);
  const curCPS = useStoreState((state) => state.curCPS.cps);

  useEffect(() => {
    const getCurrentUpgrades = async () => {
      const urlAllUpgs = upgradeUrl + "current-user";
      const responseAllUpgs = await fetch(urlAllUpgs, {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${token}`,
        }),
      });
      let data = await responseAllUpgs.json();
      console.log("Upgrades Data", data);
      setCurUpgrades(data);
    };

    const getAvailableUpgrades = async () => {
      const url = upgradeUrl + "available";
      const response = await fetch(url, {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${token}`,
        }),
      });
      let availableUpgrades = await response.json();
      console.log("response als .data", availableUpgrades);
      setAvailableUpgs(availableUpgrades);
    };

    getCurrentUpgrades();
    getAvailableUpgrades();
  }, [curCPS]);

  const findUserUpg = (id) => {
    if (curUpgrades && typeof curUpgrades.length !== "undefined") {
      if (curUpgrades.length === 0) {
        return;
      }
      return curUpgrades.find((userUpg) => {
        return userUpg.upgrade.id === id;
      });
    }
  };

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
    let data = await response.json();
    let amount = data.amount;
    setAmount(amount);
  }

  let buttons = null;
  if (curUpgrades) {
    buttons = [];
    for (const upgrade of upgrades) {
      const userUpg = findUserUpg(upgrade.id);
      if (!userUpg) {
        continue;
      }

      console.log("UPGRADES amount:" + userUpg.amount);

      buttons.push(
        <IconButton
          key={upgrade.id}
          text={upgrade.text}
          icon={upgrade.icon}
          id={upgrade.id}
          //cost={upgrade.cost}
          cost={curUpgrades[0].upgrade.cost}
          amount={1}
          onClick={() => buyUpgrade(upgrade.id)}
        />
      );
    }
  }

  return (
    <UpgradesContainer>
      <StyledHeadlines>Übertragung</StyledHeadlines>
      {buttons}
    </UpgradesContainer>
  );
};

export default UpgradeArea;
