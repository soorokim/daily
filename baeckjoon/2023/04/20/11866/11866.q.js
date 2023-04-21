const fs = require("fs");

const [n, k] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split(" ");

let arr = new Array(Number(n)).fill();

for (let i in arr) {
  arr[i] = Number(i) + 1;
}

const answer = [];
while (arr.length) {
  for (let i = 0; i < k; i++) {
    if (i === k - 1) {
      answer.push(arr.shift());
    } else {
      arr.push(arr.shift());
    }
  }
}

console.log(`<${answer.join(", ")}>`);
