const fs = require("fs");

const inputs = fs
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const a = Number(inputs[0].split(" ")[0]);
const b = Number(inputs[0].split(" ")[1]);

console.log(a - b);
