const fs = require("fs");

const [n, inputs] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const numbers = inputs.split(" ");

const checker = (number) => {
  if (number === 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

let cnt = 0;
for (const num of numbers) {
  if (checker(parseInt(num, 10))) {
    cnt += 1;
  }
}

console.log(cnt);
