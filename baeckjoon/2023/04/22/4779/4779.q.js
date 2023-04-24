const fs = require("fs");

const inputs = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const recursive = (n) => {
  if (n === 1) {
    return "-";
  }
  return recursive(n / 3) + " ".repeat(n / 3) + recursive(n / 3);
};

let answer = [];
for (let num of inputs) {
  answer.push(recursive(Math.pow(3, num)));
}
console.log(answer.join("\n"));
