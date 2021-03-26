import React, { useEffect } from "react";
import { PLAYERS, useGameManagerContext } from "../context/GameManagerContext";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const UserScreen = () => {
  const { setWhoIsTurn, setCurrentWord } = useGameManagerContext();

  useEffect(() => {
    const mic = new SpeechRecognition();
    mic.continuous = true;
    mic.interimResults = false;
    mic.maxAlternatives = 1;
    mic.lang = "tr-TR";

    mic.start();

    mic.onresult = (event) => {
      console.log("user   " + event.results[0][0].transcript);
      mic.stop();
      setWhoIsTurn(PLAYERS.Computer);
      setCurrentWord(event.results[0][0].transcript);
    };

    mic.onspeechend = () => {
      mic.stop();
    };

    mic.onnomatch = () => {
      mic.stop();
    };
    return () => {
      mic.stop();
      mic.abort();
    };
  }, [setCurrentWord, setWhoIsTurn]);
  return <div>User Screen</div>;
};

export default UserScreen;
