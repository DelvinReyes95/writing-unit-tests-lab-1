// Question 1
const isUpperCase = (string) => {
  const regex = new RegExp("[a-zA-Z]", "g");
  for (let i = 0; i < string.length; i++) {
    if (regex.test(string[i]) && string[i] === string[i].toLowerCase()) {
      return false;
    }
  }
  return true;
  //   for (let i = 0; i < string.length; i++) {
  //     if (!string[i].match(/[A-Z]/) || string[i] === string[i].toLowerCase()) {
  //         return false;
  //     }
  // }
  // return true;
};

// Question 2
const removeVowels = (str) => {
  return str.map((str) => str.replace(/[aeiou]/gi, ""));
};

// Question 3
const wordCap = (str) => {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
  }
  return words.join(" ");
};

// Question 4
const swapCase = (str) => {
  let inverted = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      inverted += str[i].toLowerCase();
    } else if (str[i] === str[i].toLowerCase()) {
      inverted += str[i].toUpperCase();
    } else {
      inverted += str[i];
    }
  }
  return inverted;
};

// Question 5
const staggeredCase = (stage) => {
  let string = "";
  let letter = "A";
  for (let i = 0; i < stage.length; i++) {
    if (/[a-z]/gi.test(stage[i])) {
      if (letter === "A") {
        string += stage[i].toUpperCase();
        letter = "Z";
      } else {
        string += stage[i].toLowerCase();
        letter = "A";
      }
    } else {
      string += stage[i];
    }
  }
  return string;

  // let newStr = "";
  //   let isLower = true;
  //   for (let i = 0; i < str.length; i++) {
  //       if (str[i].match(/[a-z]/i)) {
  //           newStr += isLower ? str[i].toLowerCase() : str[i].toUpperCase();
  //           isLower = !isLower;
  //       } else {
  //           newStr += str[i];
  //       }
  //   }
  //   return newStr;

  // let newStr = "";
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i].test(/[a-z]/i)) {
  //     if (i % 2 === 0) {
  //       newStr += str[i].toLowerCase();
  //     } else {
  //       newStr += str[i].toUpperCase();
  //     }
  //   } else {
  //     newStr += str[i];
  //   }
  // }
  // return newStr;
};

// Question 6
const wordLengths = (str = '') => {
  if (str === "") return [];
  return str.split(" ").map((word) => word + " " + word.length);
};

// Question 7
const searchWord = (word, text) => {
  const stripText = text.replaceAll(',', '')
  let array = stripText.split(' ')
  let countOfWords = 0
for (let i = 0; i < array.length; i++ ){
  if (array[i].toLowerCase() === word){
    countOfWords += 1
  }
}
return countOfWords
};

// The code below ensures that this file can talk to our test file.
module.exports = {
  isUpperCase,
  removeVowels,
  wordCap,
  swapCase,
  staggeredCase,
  wordLengths,
  searchWord,
};
