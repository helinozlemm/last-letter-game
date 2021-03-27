import React, { useState } from "react";
import { useGameManagerContext } from "../context/GameManagerContext";
import useInterval from "../hooks/useInterval";

const GameLoop = () => {
  const [timer, setTimer] = useState(8);

  const { timeIsOver } = useGameManagerContext();

  useInterval(() => {
    if (timer <= 0) {
      timeIsOver();
      return;
    }
    setTimer((prevState) => prevState - 1);
  }, 1000);

  return <div>{timer}</div>;
};

export default GameLoop;
