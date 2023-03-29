const fs = require("fs");

const inputs = fs
  //.readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ")
  .map(Number);

const diff = inputs[0] - inputs[1];
const results = diff === 0 ? "==" : diff > 0 ? ">" : "<";
console.log(results);
