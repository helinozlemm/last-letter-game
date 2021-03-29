import React, { useContext, useState, createContext, useRef } from "react";
import { SCREENS } from "../components/Router";
import CheckIsValid from "../utils/CheckIsValid";

const GameManagerContext = createContext();

export const PLAYERS = { Computer: 1, User: 2 };

export const GameManagerProvider = ({ children, setCurrentScreen }) => {
  const [currentWord, setCurrentWord] = useState("");
  const spokenWords = useRef([]);

  const [whoIsTurn, setWhoIsTurn] = useState(PLAYERS.Computer);

  const timeIsOver = () => {
    console.log("Oyun bitti ");
    setCurrentScreen(SCREENS.GameOver);
  };

  const losePercent = () => {
    let random = Math.floor(Math.random() * 101);
    console.log("RANDOM" + random);
    return random;
  };

  const changeTurn = (foundWord) => {
    if (
      losePercent() <= 10 &&
      spokenWords.current.length > 0 &&
      whoIsTurn === PLAYERS.User
    ) {
      spokenWords.current.push(foundWord.toLocaleLowerCase("tr-TR"));
      setCurrentScreen(SCREENS.GameWon);
    } else {
      if (CheckIsValid(currentWord, foundWord, spokenWords)) {
        setCurrentWord(foundWord);
        setWhoIsTurn(
          whoIsTurn === PLAYERS.User ? PLAYERS.Computer : PLAYERS.User
        );
        spokenWords.current.push(foundWord.toLocaleLowerCase("tr-TR"));
      } else {
        setCurrentScreen(SCREENS.GameOver);
      }
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
        timeIsOver,
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
