const fs = require("fs");

const [[_], ...values] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => t.split(" ").map(Number));

const computer = (points) => {
  const average = points.reduce((prev, curr) => prev + curr) / points.length;
  const high = points.filter((p) => p > average);
  const rate = (high.length / points.length) * 100;
  const roundedRate = Math.round(rate * 1000) / 1000;
  console.log(roundedRate.toFixed(3) + "%");
};

values.forEach(([c, ...p]) => computer(p));
