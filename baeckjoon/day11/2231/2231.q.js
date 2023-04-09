const fs = require("fs");

const n = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

const endNumber = n;
const nNumber = Number(n);

let m = 0;
for (let i = 0; i < endNumber; i++) {
  let sum = i;
  i.toString()
    .split("")
    .forEach((t) => {
      sum += Number(t);
    });

  if (sum === nNumber) {
    m = i;
    break;
  }
}

console.log(m);
