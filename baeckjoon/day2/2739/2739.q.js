const fs = require("fs");

const inputs = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

const value = Number(inputs);

[1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((n) =>
  console.log(`${value} * ${n} = ${value * n}`)
);
