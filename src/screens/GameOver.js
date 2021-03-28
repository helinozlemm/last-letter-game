import React from "react";
import { useGameManagerContext } from "../context/GameManagerContext";

const GameOver = () => {
  const { spokenWords } = useGameManagerContext();
  return (
    <div className="mt-5">
      <h3>
        Bildiğin kelime sayısı : {parseInt(spokenWords.current.length / 2)}
      </h3>
      <h3>Oyunu kaybettin!</h3>
    </div>
  );
};

export default GameOver;
