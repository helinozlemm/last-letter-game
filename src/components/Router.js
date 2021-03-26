import React, { useState } from "react";
import { GameManagerProvider } from "../context/GameManagerContext";
import GameOver from "../screens/GameOver";
import GameScreen from "../screens/GameScreen";
import Home from "../screens/Home";

export const SCREENS = {
  home: 1,
  GameScreen: 2,
  GameOver: 3,
};

const Router = () => {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.home);

  const RenderScreen = () => {
    switch (currentScreen) {
      case SCREENS.home:
        return <Home setCurrentScreen={setCurrentScreen} />;

      case SCREENS.GameScreen:
        return (
          <GameManagerProvider setCurrentScreen={setCurrentScreen}>
            <GameScreen />
          </GameManagerProvider>
        );
      case SCREENS.GameOver:
        return <GameOver setCurrentScreen={setCurrentScreen}></GameOver>;

      default:
        return <Home setCurrentScreen={setCurrentScreen} />;
    }
  };

  return <>{RenderScreen()}</>;
};

export default Router;
