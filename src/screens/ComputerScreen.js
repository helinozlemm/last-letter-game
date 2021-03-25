import React, { useEffect } from "react";
import names from "../data/names .json";
import { getRandomInt } from "../utils/GetRandomInt";

const ComputerScreen = () => {
  useEffect(() => {
    const randomNumber = getRandomInt(0, names.length - 1);
    console.log(names[randomNumber]);
  }, []);
  return <div>Compt screen</div>;
};

export default ComputerScreen;
