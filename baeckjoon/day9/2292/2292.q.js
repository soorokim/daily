const fs = require("fs");

const input = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

const number = Number(input);

const getMax = (n) => {
  if (n === 0) {
    return 1;
  }

  return 6 * (n - 1) + getMax(n - 1);
};

const getCount = (n, c = 2) => {
  if (n === 1) {
    return 1;
  }

  if (n <= getMax(c)) {
    return c;
  }

  return getCount(n, c + 1);
};

console.log(getCount(number));
