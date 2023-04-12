const fs = require("fs");

const [[_, n], [...inputs]] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => t.split(" "));

const sorted = [...inputs].sort((a, b) => Number(b) - Number(a));
console.log(sorted[n - 1]);
