const fs = require("fs");

const input = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

let n = Number(input);

let target = 666;
while (true) {
  if (target.toString().includes("666")) {
    n -= 1;
  }
  if (!n) {
    break;
  }
  target++;
}

console.log(target);
