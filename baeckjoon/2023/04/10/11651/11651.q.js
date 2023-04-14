const fs = require("fs");

const [_, ...inputs] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

console.log(
  inputs
    .map((t) => t.split(" "))
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      } else {
        return a[1] - b[1];
      }
    })
    .map((t) => t.join(" "))
    .join("\n")
);
