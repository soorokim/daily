const fs = require("fs");

const input = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

const n = Number(input);

let res = "";
function test(i, j, n) {
  if (i % 3 === 1 && j % 3 === 1) {
    return " ";
  } else if (n !== 3) {
    return test(Math.floor(i / 3), Math.floor(j / 3), n / 3);
  }

  return "*";
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    res += test(i, j, n);
  }
  res += "\n";
}

console.log(res);
