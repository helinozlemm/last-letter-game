import React, { useState } from "react";
import { Spinner } from "reactstrap";
import { useGameManagerContext } from "../../context/GameManagerContext";
import useInterval from "../../hooks/useInterval";

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

  return (
    <div className="d-flex mt-5 align-items-center justify-content-center">
      <Spinner size="sm" color="dark" className="mr-2"></Spinner>
      <div className="timer">
        <div>00:0</div>
        <div id="second">{timer}</div>
      </div>
    </div>
  );
};

export default GameLoop;
