import React, { useEffect } from "react";
import { useGameManagerContext } from "../context/GameManagerContext";
import { PLAYERS } from "../context/GameManagerContext";
import { findLastWord } from "../utils/FindLastWord";

const SpeechSynth = window.speechSynthesis;
const computerSpeak = new SpeechSynthesisUtterance();
computerSpeak.lang = "tr-TR";

const ComputerScreen = () => {
  const {
    setWhoIsTurn,
    setCurrentWord,
    currentWord,
    spokenWords,
  } = useGameManagerContext();

  useEffect(() => {
    const foundWord = findLastWord(currentWord, spokenWords);

    computerSpeak.text = foundWord;
    SpeechSynth.speak(computerSpeak);

    computerSpeak.onend = function () {
      console.log(`{comp} : ${foundWord}`);

      setCurrentWord(foundWord);
      setWhoIsTurn(PLAYERS.User);
      spokenWords.current.push(foundWord);
    };
  }, [currentWord, setWhoIsTurn, setCurrentWord, spokenWords]);

  return <div>Compt screen</div>;
};

export default ComputerScreen;
