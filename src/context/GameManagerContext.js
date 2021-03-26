import React, { useContext, useState, createContext, useRef } from "react";

const GameManagerContext = createContext();

export const PLAYERS = { Computer: 1, User: 2 };

export const GameManagerProvider = ({ children }) => {
  const [currentWord, setCurrentWord] = useState("");
  const spokenWords = useRef([]);

  const [whoIsTurn, setWhoIsTurn] = useState(PLAYERS.Computer);

  const changeTurn = (foundWord) => {
    setCurrentWord(foundWord);
    setWhoIsTurn(whoIsTurn === PLAYERS.User ? PLAYERS.Computer : PLAYERS.User);
    spokenWords.current.push(foundWord);
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
