const fs = require("fs");

const [n, mine, m, check] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const mineSet = new Set(mine.split(" "));

console.log(
  check
    .split(" ")
    .map((t) => (mineSet.has(t) ? 1 : 0))
    .join(" ")
);
