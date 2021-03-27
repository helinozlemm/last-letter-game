import React, { useState } from "react";
import NeedAccess from "../screens/NeedAccess";
import { GameManagerProvider } from "../context/GameManagerContext";
import GameOver from "../screens/GameOver";
import GameScreen from "../screens/GameScreen";
import Home from "../screens/Home";
import MicPermission from "../screens/MicPermission";

export const SCREENS = {
  home: 1,
  GameScreen: 2,
  GameOver: 3,
  MicPermission: 4,
  NeedAccess: 5,
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
            <GameScreen></GameScreen>
          </GameManagerProvider>
        );
      case SCREENS.GameOver:
        return (
          <GameManagerProvider>
            <GameOver setCurrentScreen={setCurrentScreen}></GameOver>
          </GameManagerProvider>
        );

      case SCREENS.MicPermission:
        return <MicPermission setCurrentScreen={setCurrentScreen} />;
      case SCREENS.NeedAccess:
        return <NeedAccess setCurrentScreen={setCurrentScreen} />;

      default:
        return <Home setCurrentScreen={setCurrentScreen} />;
    }
  };

  return <>{RenderScreen()}</>;
};

export default Router;
