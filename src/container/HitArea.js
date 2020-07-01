import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HitButton from "../components/HitButton";
import { useStoreState, useStoreActions } from "easy-peasy";

export const StyledDiv = styled.div`
  margin: 40px 0 40px 0px;
`;

const HitArea = () => {
  // const [count, setCount] = useState(0);
  // const [vps, setVPS] = useState(0);
  const [cpc, setCPC] = useState(0);
  const [clickSocket, setClickSocket] = useState();
  const [genClickSocket, setGenClickSocket] = useState();
  const [getClickSocket, setGetClickSocket] = useState();
  const token = useStoreState((state) => state.user.token);
  const setClicks = useStoreActions(
    (actions) => actions.curClicks.setCurClicks
  );
  const clicks = useStoreState((state) => state.curClicks.clicks);
  const setCPS = useStoreActions((actions) => actions.curCPS.setCurCPS);
  const cps = useStoreState((state) => state.curCPS.cps);
  // const cpc = useStoreState((state) => state.curClicks.clicks);

  // token wird aus globalen State geholt
  // wird erst ausgeführt wenn das Rendern der Komponente abgeschlossen ist
  useEffect(() => {
    const mouseClicksWS = new WebSocket(
      `ws://server.bykovski.de:8000/game/click?token=${token}`
    );
    // (Listener) bei einer Nachricht vom Server erhält man die gemachten Points
    mouseClicksWS.onmessage = (perClick) => {
      let data = JSON.parse(perClick.data);
      setCPC(data.points);
    };
    // Socket wird in State abgespeichert
    setClickSocket(mouseClicksWS);
    return () => {
      mouseClicksWS.close();
    };
  }, [token]);

  // wird erst ausgeführt wenn das Rendern der Komponente abgeschlossen ist
  useEffect(() => {
    const getClicksWS = new WebSocket(
      `ws://server.bykovski.de:8000/game/balance?token=${token}`
    );
    // (Listener) bei einer Nachricht vom Server erhält man die gemachten Points
    getClicksWS.onmessage = (actClicks) => {
      let data = JSON.parse(actClicks.data);
      // setCount(data.points);
      setClicks(data.points);
    };
    // Socket wird in State abgespeichert
    setGetClickSocket(getClicksWS);
    return () => {
      getClicksWS.close();
    };
  }, [token]);

  // wird erst ausgeführt wenn das Rendern der Komponente abgeschlossen ist
  useEffect(() => {
    const genClicksWS = new WebSocket(
      `ws://server.bykovski.de:8000/game/generators?token=${token}`
    );
    // (Listener) bei einer Nachricht vom Server erhält man die gemachten Points
    genClicksWS.onmessage = (genClicks) => {
      let data = JSON.parse(genClicks.data);
      // setVPS(data.points);
      setCPS(data.points);
    };
    // Socket wird in State abgespeichert
    setGenClickSocket(genClicksWS);
    return () => {
      genClicksWS.close();
    };
  }, [token]);

  //Methode um den Hit Click zu handeln und schickt click an den WebSocket
  const onHitClick = async (event) => {
    clickSocket.send("click");
  };

  return (
    <StyledDiv>
      <HitButton onClick={onHitClick}>{clicks}</HitButton>
      <h3>Viren insgesamt: {clicks}</h3>
      <h3>Viren pro Sekunde: {cps}</h3>
      <h3>Viren pro Click: {cpc}</h3>
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
