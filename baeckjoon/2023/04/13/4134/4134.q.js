const fs = require("fs");

const [_, ...inputs] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const getNextPrimeNumber = (start) => {
  let t = start;
  if (t === 1 || t === 0) {
    console.log(2);
    return;
  }
  while (true) {
    let x = 0;
    for (let i = 2; i <= Math.floor(Math.sqrt(t)) + 1; i++) {
      const a = t % i;

      if (a === 0) {
        x += 1;
        break;
      }
    }
    if (x === 0) {
      break;
    }
    t += 1;
  }
  console.log(t);
};

inputs.forEach((t) => getNextPrimeNumber(t));
