import React, { useState } from "react";
import styled from "styled-components";
import HitButton from "../components/HitButton";
import { useStoreState } from "easy-peasy";

export const StyledDiv = styled.div`
  margin: 40px 0 40px 0px;
`;

//öffnet Websocket Verbindung
// let sendGeneratorClicksWS = new WebSocket(
//   `ws://server.bykovski.de:8000/game/generators?token=${token}`
// );
// let getClicksWS = new WebSocket(
//   `ws://server.bykovski.de:8000/game/balance?token=${token}`
// );

const HitArea = () => {
  const [count, setCount] = useState(0);
  const click = 1;
  const token = useStoreState(state => state.user.token);
  console.log("TOKEN", token);
    
  //Methode um den Hit Click zu handeln und schickt click an den WebSocket
  const onHitClick = async (event) => {
    //sendClickWS.send("click");
    console.log("HitButton geklickt");
    setCount(count + click);
  };

  return (
    <StyledDiv>
      <HitButton onClick={onHitClick}>Clicks: {count}</HitButton>
      <h3>Clicks: {count}</h3>
    </StyledDiv>
  );
};

export default HitArea;
