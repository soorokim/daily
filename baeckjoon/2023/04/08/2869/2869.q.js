const fs = require("fs");

const [a, b, v] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(Math.ceil((v - a) / (a - b) + 1));
