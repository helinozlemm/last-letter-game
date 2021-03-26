import data from "../data/names.json";
import { getRandomInt } from "./GetRandomInt";

const findRandomLetter = () => {
  const turkishAlphabet = "aâbcçdefghiıjklmnoöprsştuüvwyz";

  return turkishAlphabet[getRandomInt(0, turkishAlphabet.length - 1)];
};

export const findLastWord = (currentWord, spokenWords) => {
  const lastLetter = currentWord.slice(-1) || findRandomLetter();
  const found = data.find((name) => {
    if (spokenWords.current.includes(name)) return false;
    return name[0] === lastLetter;
  });

  return found;
};
