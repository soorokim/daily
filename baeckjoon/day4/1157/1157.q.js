const fs = require("fs");

const inputs = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .toUpperCase();

const counter = {};

for (let a of inputs) {
  if (counter[a]) {
    counter[a] += 1;
  } else {
    counter[a] = 1;
  }
}

const sorted = Object.entries(counter).sort((a, b) => b[1] - a[1]);

if (sorted.length > 1) {
  console.log(sorted[0][1] === sorted[1][1] ? "?" : sorted[0][0]);
} else {
  console.log(sorted[0][0]);
}
