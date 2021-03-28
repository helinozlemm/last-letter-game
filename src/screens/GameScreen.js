import React from "react";
import { useGameManagerContext } from "../context/GameManagerContext";
import ComputerScreen from "./ComputerScreen";
import UserScreen from "./UserScreen";
import { PLAYERS } from "../context/GameManagerContext";

const GameScreen = () => {
  const { whoIsTurn, currentWord } = useGameManagerContext();
  return (
    <div>
      {whoIsTurn === PLAYERS.Computer ? <ComputerScreen /> : <UserScreen />}
      <h3 className="mt-5"> {currentWord}</h3>
    </div>
  );
};

export default GameScreen;
