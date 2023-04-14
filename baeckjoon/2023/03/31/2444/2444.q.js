const fs = require("fs");

const input = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

const maxLine = Number(input) * 2 - 1;
let value = Number(input);
let lines = maxLine;

while (lines !== 0) {
  const empty = Math.abs(maxLine - value);
  console.log(" ".repeat(empty) + "*".repeat((Number(input) - empty) * 2 - 1));
  lines -= 1;
  value += 1;
}
