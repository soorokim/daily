const fs = require("fs");

const [_, ...inputs] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

let sum = 0;
let before = [];
for (let i of inputs) {
  const n = Number(i);
  if (n) {
    sum += n;
    before.push(n);
  } else {
    sum -= before.pop();
  }
}

console.log(sum);
