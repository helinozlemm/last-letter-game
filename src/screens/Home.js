import React from "react";
import { SCREENS } from "../components/Router";

const Home = ({ setCurrentScreen }) => {
  return (
    <div>
      <button onClick={() => setCurrentScreen(SCREENS.GameScreen)}>
        Start Game
      </button>
    </div>
  );
};

export default Home;
