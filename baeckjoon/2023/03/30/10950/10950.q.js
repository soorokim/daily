const fs = require("fs");

const [x, ...inputs] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const values = inputs.map((v) => v.split(" ").map(Number));

values.forEach((v) => console.log(v[0] + v[1]));
