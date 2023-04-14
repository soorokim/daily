const fs = require("fs");

const inputs = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => t.split(""));

let temp = [];

inputs.forEach((t) => {
  t.forEach((b, j) => {
    if (!temp[j]) {
      temp[j] = `${b}`;
    } else {
      temp[j] = `${temp[j]}${b}`;
    }
  });
});

console.log(temp.join(""));
