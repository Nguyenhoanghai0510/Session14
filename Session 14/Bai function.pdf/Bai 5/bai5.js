let capital = (word) => {
    let firstWord = word.charAt(0).toUpperCase();
    let otherWord = word.slice(1).toLowerCase();
    return firstWord + otherWord;
  };
  console.log(capital("rIkKEi"));