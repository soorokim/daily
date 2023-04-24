const fs = require("fs");

const inputs = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let result = "";

let c = 0;
const recursive = (i, j, n) => {
  if (Math.floor(i / n) % 3 === 1 && Math.floor(j / n) % 3 === 1) {
    result += " ";
  } else {
    if (n / 3 === 0) {
      result += "*";
    } else {
      recursive(i, j, Math.floor(n / 3));
    }
  }
};
const draw = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      recursive(i, j, n);
    }
    result += "\n";
  }
};
draw(27);
console.log(result);
