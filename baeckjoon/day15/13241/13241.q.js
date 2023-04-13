const fs = require("fs");

const [a, b] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const gcd = (a, b) => {
  let c;
  while (b) {
    c = a % b;
    a = b;
    b = c;
  }
  return a;
};

console.log((a * b) / gcd(a, b));
