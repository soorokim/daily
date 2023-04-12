const fs = require("fs");

const [nm, ...words] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = nm.split(" ");

const hasSet = new Set(words.slice(0, n));
console.log(
  words.slice(n).reduce((prev, curr) => {
    if (hasSet.has(curr)) return prev + 1;
    return prev;
  }, 0)
);
