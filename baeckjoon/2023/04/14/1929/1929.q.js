const fs = require("fs");

const [a, b] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const answer = [];
const computer = (start, end) => {
  for (let i = start; i <= end; i++) {
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
};

computer(a, b);

console.log(answer.join("\n"));
