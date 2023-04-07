const fs = require("fs");

const input = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

const getPointsCount = (n) => {
  if (n === 0) {
    return 2;
  }

  return getPointsCount(n - 1) + getPointsCount(n - 1) - 1;
};

console.log(Math.pow(getPointsCount(Number(input)), 2));
