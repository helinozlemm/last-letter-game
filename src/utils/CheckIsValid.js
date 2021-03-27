import data from "../data/names.json";

const CheckIsValid = (currentWord, newWord, spokenWords) => {
  if (currentWord === "") {
    return true;
  }

  const lastLetter = currentWord.slice(-1).toLocaleLowerCase("tr-TR");
  const newLowerWord = newWord.toLocaleLowerCase("tr-TR");

  if (newLowerWord[0] !== lastLetter.toLocaleLowerCase("tr-TR")) {
    console.log({ newLowerWord, lastLetter });
    console.log("İlk kelime, ikinci kelime ile aynı değil");
    return false;
  }

  if (spokenWords.current.includes(newLowerWord)) {
    console.log(spokenWords, newLowerWord);
    console.log("Kelime kullanılmış");
    return false;
  }

  if (!data.includes(newLowerWord)) {
    console.log(`${newLowerWord} : isim değil`);
    return false;
  }

  return true;
};

export default CheckIsValid;
