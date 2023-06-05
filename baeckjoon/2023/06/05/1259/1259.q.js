const fs = require("fs");

const inputs = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const checker = (s, e, text) => {
  if (s < e) {
    return text[s] === text[e] ? checker(s + 1, e - 1, text) : "no";
  }

  return "yes";
};

for (const word of inputs) {
  if (word !== "0") {
    console.log(checker(0, word.length - 1, word));
  }
}
