const fs = require("fs");

const [n, a, b] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const aSet = new Set(a.split(" "));
const bSet = new Set(b.split(" "));

aSet.forEach((t) => {
  if (bSet.has(t)) {
    aSet.delete(t);
    bSet.delete(t);
  }
});

console.log(aSet.size + bSet.size);
