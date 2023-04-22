const fs = require("fs");

const input = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input);

const factorial = (num) => {
  if (num === 0) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(n));
