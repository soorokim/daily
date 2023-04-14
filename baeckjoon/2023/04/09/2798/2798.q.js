const fs = require("fs");

const [[n, m], [...inputs]] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => t.split(" ").map(Number));

const cards = [...inputs];

const sumList = [];
while (cards.length) {
  const a = cards.pop();
  const bList = [...cards];

  while (bList.length) {
    const b = bList.pop();

    bList.forEach((c) => {
      const sum = a + b + c;
      if (sum <= m) {
        sumList.push(a + b + c);
      }
    });
  }
}

sumList.sort((a, b) => b - a);
console.log(sumList[0]);
