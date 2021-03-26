import React, { useEffect } from "react";
import { useGameManagerContext } from "../context/GameManagerContext";
import names from "../data/names .json";
import { getRandomInt } from "../utils/GetRandomInt";
import { PLAYERS } from "../context/GameManagerContext";

const ComputerScreen = () => {
  const { setWhoIsTurn, setCurrentWord } = useGameManagerContext();
  useEffect(() => {
    const randomNumber = getRandomInt(0, names.length - 1);
    const foundedWord = names[randomNumber];
    console.log(`{comp} : ${foundedWord}`);
    setCurrentWord(foundedWord);
    setWhoIsTurn(PLAYERS.User);
  }, []);
  return <div>Compt screen</div>;
};

export default ComputerScreen;
