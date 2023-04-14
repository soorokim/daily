const fs = require("fs");

const [nm, ...inputs] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = nm.split(" ");
const a = new Set(inputs.slice(0, n));

const b = [];
inputs.slice(n).forEach((t) => {
  if (a.has(t)) {
    b.push(t);
  }
});

console.log(b.length);
console.log(b.sort().join("\n"));
