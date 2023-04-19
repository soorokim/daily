const fs = require("fs");

const input = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

const n = Number(input);

let before = 1;
const computer = (x) => {
  const t = before;
  if (x === 1) {
    return before;
  } else if (2 * t === x) {
    before = 1;
  } else {
    before += 1;
  }
  return 2 * t;
};

let result = 0;

for (let i = 1; i <= 20; i++) {
  result = computer(i);
  console.log(i, result);
}

console.log(result);
