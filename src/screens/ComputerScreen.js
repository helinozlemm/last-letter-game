import React, { useEffect } from "react";
import { useGameManagerContext } from "../context/GameManagerContext";
import { PLAYERS } from "../context/GameManagerContext";
import { findLastWord } from "../utils/FindLastWord";

const ComputerScreen = () => {
  const { setWhoIsTurn, setCurrentWord, currentWord } = useGameManagerContext();
  useEffect(() => {
    const foundWord = findLastWord(currentWord);

    console.log(`{comp} : ${foundWord} ${currentWord}`);
    setCurrentWord(foundWord);
    setWhoIsTurn(PLAYERS.User);
  }, [currentWord, setWhoIsTurn, setCurrentWord]);
  return <div>Compt screen</div>;
};

export default ComputerScreen;
