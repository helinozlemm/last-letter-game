import React from "react";
import { useGameManagerContext } from "../context/GameManagerContext";

const GameOver = () => {
  const { spokenWords } = useGameManagerContext();
  return (
    <div>
      {" "}
      {parseInt(spokenWords.current.length / 2)}
      GAME OVER
    </div>
  );
};

export default GameOver;
