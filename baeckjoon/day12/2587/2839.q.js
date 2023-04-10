const fs = require("fs");

const input = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

const n = Number(input);

const fiveCount = Math.floor(n / 5);

let answer = -1;
for (let i = fiveCount; i >= 0; i--) {
  if ((n - 5 * i) % 3 === 0) {
    answer = i + (n - 5 * i) / 3;
    break;
  }
}

console.log(answer);
