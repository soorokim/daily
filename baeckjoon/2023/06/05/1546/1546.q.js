const fs = require("fs");

const [n, points] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

let largest = 0;
let count = 0;

const sum = points.split(" ").reduce((prev, curr) => {
  const tmp = parseInt(curr, 10);
  if (tmp > largest) {
    largest = tmp;
  }
  count += 1;
  return (prev += tmp);
}, 0);

console.log((100 / largest) * (sum / count));
