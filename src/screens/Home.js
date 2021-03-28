import React from "react";
import { SCREENS } from "../components/Router";
import { Button } from "reactstrap";

const Home = ({ setCurrentScreen }) => {
  return (
    <div>
      <h3 className="mt-4">
        Oyun kelimenin son harfinden başlayan bir kelime oyunudur.
      </h3>
      <Button
        className="mt-4"
        color="success"
        onClick={() => setCurrentScreen(SCREENS.MicPermission)}
      >
        Oyuna Başla!
      </Button>
    </div>
  );
};

export default Home;
