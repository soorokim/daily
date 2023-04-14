const fs = require("fs");

const [_, [...inputs]] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => t.split(" "));

const sorted = [...inputs].sort((a, b) => Number(a) - Number(b));
const indexBook = {};

let index = 0;

sorted.forEach((v, i) => {
  if (indexBook[v] === undefined) {
    indexBook[v] = index;
    index += 1;
  }
});

console.log(inputs.map((t) => indexBook[t]).join(" "));
