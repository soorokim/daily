const fs = require("fs");

const [_, ...words] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

let results = 0;

const checker = (word) => {
  const pastChar = [];
  let currentChar = undefined;

  for (let w of word) {
    if (!currentChar) {
      currentChar = w;
    } else {
      if (w !== currentChar) {
        pastChar.push(currentChar);
        currentChar = w;
        if (pastChar.find((c) => c === w)) return;
      }
    }
  }

  results += 1;
  return;
};

words.forEach(checker);

console.log(results);
