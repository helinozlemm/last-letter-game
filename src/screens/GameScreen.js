import React from "react";
import { useGameManagerContext } from "../context/GameManagerContext";
import ComputerScreen from "./ComputerScreen";
import UserScreen from "./UserScreen";
import { PLAYERS } from "../context/GameManagerContext";

const GameScreen = () => {
  const { whoIsTurn } = useGameManagerContext();
  return (
    <div>
      {whoIsTurn === PLAYERS.Computer ? <ComputerScreen /> : <UserScreen />}
    </div>
  );
};

export default GameScreen;
