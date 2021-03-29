import React from "react";
import { useGameManagerContext } from "../context/GameManagerContext";
import { Button } from "reactstrap";
import { SCREENS } from "../components/Router";

const GameWon = ({setCurrentScreen}) => {
  const { spokenWords } = useGameManagerContext();
  return (
    <div className="mt-5">
      <h3>
        Bildiğin kelime sayısı : {parseInt(spokenWords.current.length / 2)}
      </h3>
      <h3>Tebrikler! Oyunu kazandın!</h3>
      <Button
        className="mt-4"
        color="success"
        onClick={() => setCurrentScreen(SCREENS.MicPermission)}
      >
        Tekrar Oyna!
      </Button>
    </div>
  );
};

export default GameWon;
