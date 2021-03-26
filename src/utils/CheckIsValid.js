import data from "../data/names.json";

const CheckIsValid = (currentWord, newWord, spokenWords) => {
  if (currentWord === "") return true;
  const lastLetter = currentWord.slice(-1);
  if (newWord[0].toLowerCase("tr-TR") !== lastLetter.toLowerCase("tr-TR"))
    return false;
  if (!spokenWords.current.includes(newWord)) return false;
  if (!data.includes(newWord)) return false;

  return true;
};

export default CheckIsValid;
