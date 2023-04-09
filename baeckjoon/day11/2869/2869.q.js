const fs = require("fs");

const [a, b] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split(" ");

console.log((BigInt(a) + BigInt(b)).toString());
