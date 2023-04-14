const fs = require("fs");

const inputs = fs
  //.readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const base = Number(inputs[0]);
const values = inputs[1].split("").reverse();

let results = 0;

for (let index in values) {
  const multiple = base * values[index];
  console.log(multiple);
  results += multiple * Math.pow(10, index);
}

console.log(results);
