const fs = require("fs");

const [base, n, ...inputs] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const values = inputs.map((v) => v.split(" ").map(Number));

const sum = values.reduce((prev, [value, count]) => (prev += value * count), 0);

sum === Number(base) ? console.log("Yes") : console.log("No");
