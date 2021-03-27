import React from "react";
import { SCREENS } from "../components/Router";

const Home = ({ setCurrentScreen }) => {
  return (
    <div>
      <button onClick={() => setCurrentScreen(SCREENS.MicPermission)}>
        Start Game
      </button>
    </div>
  );
};

export default Home;
