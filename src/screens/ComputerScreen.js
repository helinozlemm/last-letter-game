import React, { useEffect, useRef } from "react";
import { useGameManagerContext } from "../context/GameManagerContext";
import { findLastWord } from "../utils/FindLastWord";

const SpeechSynth = window.speechSynthesis;
const computerSpeak = new SpeechSynthesisUtterance();
computerSpeak.lang = "tr-TR";

const ComputerScreen = () => {
  const { currentWord, spokenWords, changeTurn } = useGameManagerContext();

  const computerIsPlayed = useRef(false);

  useEffect(() => {
    if (computerIsPlayed.current) return;
    computerIsPlayed.current = true;

    const foundWord = findLastWord(currentWord, spokenWords);
    console.log(`{comp} : ${foundWord}`);

    computerSpeak.text = foundWord;
    SpeechSynth.speak(computerSpeak);

    computerSpeak.onend = () => {
      changeTurn(foundWord);
    };

    return () => {
      SpeechSynth.cancel();
    };
  }, [currentWord, changeTurn, spokenWords]);

  return <div>Compt screen</div>;
};

export default ComputerScreen;
