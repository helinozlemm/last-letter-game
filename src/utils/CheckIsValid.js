import data from "../data/names.json";

const CheckIsValid = (currentWord, newWord, spokenWords) => {
  if (currentWord === "") {
    return true;
  }

  const lastLetter = currentWord.slice(-1).toLocaleLowerCase("tr-TR");
  const newLowerWord = newWord.toLocaleLowerCase("tr-TR");

  if (newLowerWord[0] !== lastLetter.toLocaleLowerCase("tr-TR")) {
    return false;
  }

  if (spokenWords.current.includes(newLowerWord)) {
    return false;
  }

  if (!data.includes(newLowerWord)) {
    return false;
  }

  return true;
};

export default CheckIsValid;
