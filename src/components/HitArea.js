import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HitButton from "../components/HitButton";
import { useStoreState } from "easy-peasy";

export const StyledDiv = styled.div`
  margin: 40px 0 40px 0px;
`;

// // let sendGeneratorClicksWS = new WebSocket(
// //   `ws://server.bykovski.de:8000/game/generators?token=${token}`
// // );

const HitArea = () => {
  const [count, setCount] = useState(0);
  const [clickSocket, setClickSocket] = useState();
  const [genClickSocket, setGenClickSocket] = useState();
  const [getClickSocket, setGetClickSocket] = useState();

  let clicks = 0;
  // token wird aus globalen State geholt
  const token = useStoreState((state) => state.user.token);
  console.log("TOKEN", token);

  // wird erst ausgeführt wenn das Rendern der Komponente abgeschlossen ist
  useEffect(() => {
    const mouseClickWS = new WebSocket(
      `ws://server.bykovski.de:8000/game/click?token=${token}`
    );
    // Socket wird in State abgespeichert
    setClickSocket(mouseClickWS);
    return () => {
      mouseClickWS.close();
    };
  }, []);
  console.log(clickSocket);

  // wird erst ausgeführt wenn das Rendern der Komponente abgeschlossen ist
  useEffect(() => {
    const getClicksWS = new WebSocket(
      `ws://server.bykovski.de:8000/game/balance?token=${token}`
    );
    // bei einer Nachricht vom Server (Points)
    getClicksWS.onmessage = (actClicks) => {
      let data = JSON.parse(actClicks.data);
      clicks = data.points;
      setCount(clicks);
    };
    // Socket wird in State abgespeichert
    setGetClickSocket(getClicksWS);
    return () => {
      getClicksWS.close();
    };
  }, []);
  console.log(getClickSocket);

  //Methode um den Hit Click zu handeln und schickt click an den WebSocket
  const onHitClick = async (event) => {
    clickSocket.send("click");
    console.log("HitButton geklickt");
    // setCount(count + 1);
  };

  return (
    <StyledDiv>
      <HitButton onClick={onHitClick}>Clicks: {count}</HitButton>
      <h3>Clicks: {count}</h3>
    </StyledDiv>
  );
};

export default HitArea;

// /* kann man öfters kaufen // Jeder Generator kann öfters gekauft werden */
// /* und jeder einzelne erhöht seinen preis, diesen bekommt er vom Server */
// /* /generators​/{generator_id}​/buy  */
// /* ​/generators​/{generator_id}​/next-price  */
// // aktuelle Balance in GlobalState
// // Upgrades kann man nur einmal kaufen // erhöht manuelle Click Zahlen
