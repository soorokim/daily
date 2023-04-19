const fs = require("fs");

const input = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

const n = Number(input);

let after = 1;
let before = 1;
for (let i = 1; i < n; i = after) {
  before = i;
  after = i * 2;
}

if (after === n) {
  console.log(n);
} else {
  console.log((n - before) * 2);
}
