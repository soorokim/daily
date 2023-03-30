const fs = require("fs");

const inputs = fs
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

const gap = 2541 - 1998;

console.log(Number(inputs) - gap);
