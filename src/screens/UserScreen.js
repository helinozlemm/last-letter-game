import React, { useEffect } from "react";
import { PLAYERS, useGameManagerContext } from "../context/GameManagerContext";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const UserScreen = () => {
  const { setWhoIsTurn, setCurrentWord, spokenWords } = useGameManagerContext();

  useEffect(() => {
    const mic = new SpeechRecognition();
    mic.continuous = true;
    mic.interimResults = false;
    mic.maxAlternatives = 1;
    mic.lang = "tr-TR";

    mic.start();

    mic.onresult = (event) => {
      const result = event.results[0][0].transcript;
      console.log("user   " + result);
      mic.stop();
      spokenWords.current.push(result);
      setCurrentWord(result);
      setWhoIsTurn(PLAYERS.Computer);
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
  }, [setCurrentWord, setWhoIsTurn, spokenWords]);
  return <div>User Screen</div>;
};

export default UserScreen;
