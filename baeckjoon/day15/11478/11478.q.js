const fs = require("fs");

const inputs = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

const another = new Set();

for (let i in inputs) {
  for (let j = Number(i) + 1; j < inputs.length + 1; j++) {
    another.add(inputs.slice(i, j));
  }
}

console.log(another.size);
