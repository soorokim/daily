const fs = require("fs");

const [mn, ...inputs] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const [m, n] = mn.split(" ");
const nameMap = new Map();
const indexMap = new Map();

inputs.slice(0, m).forEach((n, i) => {
  nameMap.set(n, i + 1);
  indexMap.set(i + 1, n);
});

console.log(
  inputs
    .slice(m)
    .map((t) => {
      if (parseInt(t)) {
        return indexMap.get(parseInt(t));
      } else {
        return nameMap.get(t);
      }
    })
    .join("\n")
);
