const fs = require("fs");

const input = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const normal = [1, 1, 2, 2, 2, 8];
console.log(input.map((i, index) => normal[index] - i).join(" "));
