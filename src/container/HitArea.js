import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HitButton from "../components/HitButton";
import { useStoreState, useStoreActions } from "easy-peasy";

export const StyledDiv = styled.div`
  margin: 40px 0 40px 0px;
  font-size: 26px;
  left: 25vw;
  top: 10%;
  position: absolute;
  text-align: center;
  width: 50vw;
  height: 100vh;
`;

const HitArea = () => {
  // const [count, setCount] = useState(0);
  // const [vps, setVPS] = useState(0);
  const [cpc, setCPC] = useState(0);
  const [clickSocket, setClickSocket] = useState();
  const [sessionClicks, setSessionClicks] = useState(1);
  const [sessionViren, setSessionViren] = useState(cpc);
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
    setSessionClicks(sessionClicks + 1);
    console.log(sessionClicks);
    setSessionViren(cpc * sessionClicks);
    console.log(sessionViren);

    clickSocket.send("click");
  };

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };

  return (
    <StyledDiv>
      <HitButton onClick={onHitClick} />
      <p>Viren insgesamt: {clicks ? formatNumber(clicks) : 0}</p>
      <p>Viren pro Sekunde: {cps ? formatNumber(cps) : 0}</p>
      <p>Viren pro Click: {cpc ? formatNumber(cpc) : 0}</p>
      <p>
        Click-Viren pro Session: {sessionViren ? formatNumber(sessionViren) : 0}
      </p>
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
