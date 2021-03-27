import React, { useContext, useState, createContext, useRef } from "react";
import { SCREENS } from "../components/Router";
import CheckIsValid from "../utils/CheckIsValid";

const GameManagerContext = createContext();

export const PLAYERS = { Computer: 1, User: 2 };

export const GameManagerProvider = ({ children, setCurrentScreen }) => {
  const [currentWord, setCurrentWord] = useState("");
  const spokenWords = useRef([]);

  const [whoIsTurn, setWhoIsTurn] = useState(PLAYERS.Computer);

  const changeTurn = (foundWord) => {
    if (CheckIsValid(currentWord, foundWord, spokenWords)) {
      setCurrentWord(foundWord);
      setWhoIsTurn(
        whoIsTurn === PLAYERS.User ? PLAYERS.Computer : PLAYERS.User
      );
      spokenWords.current.push(foundWord.toLocaleLowerCase("tr-TR"));
    } else {
      setCurrentScreen(SCREENS.GameOver);
    }
  };
  return (
    <GameManagerContext.Provider
      value={{
        currentWord,
        setCurrentWord,
        whoIsTurn,
        setWhoIsTurn,
        spokenWords,
        changeTurn,
      }}
    >
      {children}
    </GameManagerContext.Provider>
  );
};

export const useGameManagerContext = () => {
  const context = useContext(GameManagerContext);

  if (context === undefined) {
    throw new Error(
      "useGameManagerContext must be used within a GameManagerContext"
    );
  }
  return context;
};
