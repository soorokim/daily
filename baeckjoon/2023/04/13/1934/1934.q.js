const fs = require("fs");

const [n, ...inputs] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const computer = (a, b) => {
  let i = 1;
  let j = 1;
  while (true) {
    if (a * i === b * j) {
      return a * i;
    }
    if (a * i > b * j) {
      j += 1;
    } else {
      i += 1;
    }
  }
};

console.log(
  inputs
    .map((t) => t.split(" "))
    .map(([a, b]) => computer(Number(a), Number(b)))
    .join("\n")
);
