import React, { useEffect } from "react";
import { SCREENS } from "../components/Router";

const MicPermission = ({ setCurrentScreen }) => {
  useEffect(() => {
    askPermission()
      .then(() => setCurrentScreen(SCREENS.GameScreen))
      .catch(() => setCurrentScreen(SCREENS.NeedAccess));
    return () => {};
  });

  const askPermission = () => {
    return new Promise((resolve, reject) => {
      const askRecognition = new window.webkitSpeechRecognition();
      askRecognition.onerror = reject;
      askRecognition.onstart = resolve;

      askRecognition.start();
    });
  };

  return <div></div>;
};

export default MicPermission;
