const fs = require("fs");

const inputs = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

const history = {};
let largest = 0;
let sameTimes = [0, 0];

for (let n of inputs) {
  if (history[n]) {
    history[n] += 1;
    sameTimes = [n, history[n]];
  } else {
    history[n] = 1;
  }

  if (n > largest) {
    largest = n;
  }
}

const [num, times] = sameTimes;

if (times === 3) {
  console.log(10000 + num * 1000);
} else if (times === 2) {
  console.log(1000 + num * 100);
} else {
  console.log(largest * 100);
}
