const fs = require("fs");

const input = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

const wCount = Number(input);

let results = 0;

for (let i = 1; i * i <= wCount; i++) {
  results += 1;
}

console.log(results);
