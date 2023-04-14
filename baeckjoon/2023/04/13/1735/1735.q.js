const fs = require("fs");

const [first, second] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => t.split(" ").map(Number));

const gcd = (a, b) => {
  let c;
  while (b) {
    c = a % b;
    a = b;
    b = c;
  }
  return a;
};

const mother = first[1] * second[1];
const son = first[0] * second[1] + second[0] * first[1];

const t = gcd(mother, son);

console.log(son / t, mother / t);
