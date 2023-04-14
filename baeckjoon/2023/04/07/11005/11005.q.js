const fs = require("fs");

const [n, b] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split(" ");

console.log(Number(n).toString(b).toUpperCase());
