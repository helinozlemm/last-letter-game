import React, { useEffect } from "react";
import GameLoop from "../components/GameLoop/GameLoop";
import { useGameManagerContext } from "../context/GameManagerContext";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const UserScreen = () => {
  const { changeTurn } = useGameManagerContext();

  useEffect(() => {
    const mic = new SpeechRecognition();
    mic.continuous = true;
    mic.interimResults = false;
    mic.maxAlternatives = 1;
    mic.lang = "tr-TR";

    mic.start();

    mic.onresult = (event) => {
      const result = event.results[0][0].transcript;
      mic.stop();
      changeTurn(result);
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
  }, [changeTurn]);
  return (
    <div>
      <GameLoop />
    </div>
  );
};

export default UserScreen;
