const fs = require("fs");

const [_, ...inputs] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

inputs.sort((a, b) => a - b);
const gaps = [];
for (let i = 1; i < inputs.length; i++) {
  gaps.push(inputs[i] - inputs[i - 1]);
}

const gcd = (a, b) => {
  let c;
  while (b) {
    c = a % b;
    a = b;
    b = c;
  }

  return a;
};

const sameGap = gaps.reduce((prev, curr) => gcd(prev, curr));

let count = 0;
for (let t of gaps) {
  count += t / sameGap - 1;
}

console.log(count);
