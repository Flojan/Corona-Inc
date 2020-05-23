import React, { useState } from "react";
import Button from "../components/Button";

const Game = () => {
    const [count, setCount] = useState(0)

    const GeneratorOne = (event) => {
        event.preventDefault()
        setCount(count + 10)
    }

    return(
        <div>
            <h1>Coronoa-Inc Clicker Game</h1>
            <Button onClick={() => setCount(count + 1)}>Click</Button>
            <p>Clicks: {count}</p>
            <h4>Generatoren</h4>
            <Button onClick={GeneratorOne} >Level 1</Button>
        </div>
    );
}

export default Game;