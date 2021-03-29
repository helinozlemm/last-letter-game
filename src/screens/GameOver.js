import React from "react";
import { useGameManagerContext } from "../context/GameManagerContext";
import { Button } from "reactstrap";
import { SCREENS } from "../components/Router";

const GameOver = ({setCurrentScreen}) => {
  const { spokenWords } = useGameManagerContext();
  return (
    <div className="mt-5">
      <h3>
        Bildiğin kelime sayısı : {parseInt(spokenWords.current.length / 2)}
      </h3>
      <h3>Oyunu kaybettin!</h3>
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

export default GameOver;
