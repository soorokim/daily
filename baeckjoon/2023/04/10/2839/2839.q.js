const fs = require("fs");

const inputs = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

inputs.sort((a, b) => a - b);

const sum = inputs.reduce((prev, curr) => prev + curr, 0);
console.log(sum / 5);
console.log(inputs[2]);
