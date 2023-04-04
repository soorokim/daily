const fs = require("fs");

const inputs = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => t.split(" "))
  .join(",")
  .split(",")
  .map((t) => +t);

const values = [...inputs].sort((a, b) => b - a);

console.log(values[0]);
const index = inputs.findIndex((t) => t === values[0]) + 1;
const row = Math.ceil(index / 9);
const column = index % 9 === 0 ? 9 : index % 9;
console.log(row, column);
