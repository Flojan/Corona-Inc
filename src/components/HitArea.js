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
  const [vps, setVPS] = useState(0);
  const [vpc, setVPC] = useState(0);
  const [clickSocket, setClickSocket] = useState();
  const [genClickSocket, setGenClickSocket] = useState();
  const [getClickSocket, setGetClickSocket] = useState();

  // token wird aus globalen State geholt
  const token = useStoreState((state) => state.user.token);
  console.log("TOKEN", token);

  // wird erst ausgeführt wenn das Rendern der Komponente abgeschlossen ist
  useEffect(() => {
    const mouseClicksWS = new WebSocket(
      `ws://server.bykovski.de:8000/game/click?token=${token}`
    );
    // (Listener) bei einer Nachricht vom Server erhält man die gemachten Points
    mouseClicksWS.onmessage = (perClick) => {
      let data = JSON.parse(perClick.data);
      setVPC(data.points);
    };
    // Socket wird in State abgespeichert
    setClickSocket(mouseClicksWS);
    return () => {
      mouseClicksWS.close();
    };
  }, []);
  console.log(clickSocket);

  // wird erst ausgeführt wenn das Rendern der Komponente abgeschlossen ist
  useEffect(() => {
    const getClicksWS = new WebSocket(
      `ws://server.bykovski.de:8000/game/balance?token=${token}`
    );
    // (Listener) bei einer Nachricht vom Server erhält man die gemachten Points
    getClicksWS.onmessage = (actClicks) => {
      let data = JSON.parse(actClicks.data);
      setCount(data.points);
    };
    // Socket wird in State abgespeichert
    setGetClickSocket(getClicksWS);
    return () => {
      getClicksWS.close();
    };
  }, []);
  console.log(getClickSocket);

  // wird erst ausgeführt wenn das Rendern der Komponente abgeschlossen ist
  useEffect(() => {
    const genClicksWS = new WebSocket(
      `ws://server.bykovski.de:8000/game/generators?token=${token}`
    );
    // (Listener) bei einer Nachricht vom Server erhält man die gemachten Points
    genClicksWS.onmessage = (genClicks) => {
      let data = JSON.parse(genClicks.data);
      setVPS(data.points);
    };
    // Socket wird in State abgespeichert
    setGenClickSocket(genClicksWS);
    return () => {
      genClicksWS.close();
    };
  }, []);
  console.log(genClickSocket);

  //Methode um den Hit Click zu handeln und schickt click an den WebSocket
  const onHitClick = async (event) => {
    clickSocket.send("click");
    console.log("HitButton geklickt");
    // setCount(count + 1);
  };

  return (
    <StyledDiv>
      <HitButton onClick={onHitClick}>{count}</HitButton>
      <h3>Viren insgesamt: {count}</h3>
      <h3>Viren pro Sekunde: {vps}</h3>
      <h3>Viren pro Click: {vpc}</h3>
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
