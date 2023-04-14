const fs = require("fs");

const [...inputs] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

inputs.pop();

const computer = (start, end) => {
  const answer = [];

  for (let i = start + 1; i <= end; i++) {
    if (i === 0 || i === 1) {
      continue;
    }
    if (i === 2) {
      answer.push(2);
      continue;
    }
    let isPrime = true;
    for (let j = 2; j <= Math.floor(Math.sqrt(i)) + 1; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      answer.push(i);
    }
  }
  return answer.length;
};

console.log(inputs.map((t) => computer(t, 2 * t)).join("\n"));
