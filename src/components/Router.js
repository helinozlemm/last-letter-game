import React, { useState } from "react";
import { GameManagerProvider } from "../context/GameManagerContext";
import GameScreen from "../screens/GameScreen";
import Home from "../screens/Home";

export const SCREENS = {
  home: 1,
  GameScreen: 2,
};

const Router = () => {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.home);

  const RenderScreen = () => {
    switch (currentScreen) {
      case SCREENS.home:
        return <Home setCurrentScreen={setCurrentScreen} />;

      case SCREENS.GameScreen:
        return (
          <GameManagerProvider>
            <GameScreen />
          </GameManagerProvider>
        );

      default:
        return <Home setCurrentScreen={setCurrentScreen} />;
    }
  };

  return <>{RenderScreen()}</>;
};

export default Router;
