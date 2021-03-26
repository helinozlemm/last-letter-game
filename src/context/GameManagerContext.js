import React, { useContext, useState, createContext } from "react";

const GameManagerContext = createContext();

export const PLAYERS = { Computer: 1, User: 2 };

export const GameManagerProvider = ({ children }) => {
  const [currentWord, setCurrentWord] = useState("");

  const [whoIsTurn, setWhoIsTurn] = useState(PLAYERS.Computer);

  return (
    <GameManagerContext.Provider
      value={{ currentWord, setCurrentWord, whoIsTurn, setWhoIsTurn }}
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
