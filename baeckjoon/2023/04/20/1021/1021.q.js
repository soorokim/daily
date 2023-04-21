const fs = require("fs");

const [nm, inputs] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = nm.split(" ");

const a = [];

for (let i = 1; i <= n; i++) {
  a.push(i);
}

const numbers = inputs.split(" ");

let answer = 0;
for (let n of numbers) {
  const number = Number(n);
  const fSearchIndex = a.findIndex((t) => t === number);
  const bSearchIndex = a.length - fSearchIndex;

  if (fSearchIndex <= bSearchIndex) {
    answer += fSearchIndex;
    for (let i = 0; i < fSearchIndex; i++) {
      a.push(a.shift());
    }
    a.shift();
  } else {
    answer += bSearchIndex;
    for (let i = 0; i < bSearchIndex; i++) {
      a.unshift(a.pop());
    }
    a.shift();
  }
}

console.log(answer);
