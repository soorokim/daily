const fs = require("fs");

const [n, cards, m, check] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const counter = {};

cards.split(" ").forEach((t) => {
  if (counter[t]) {
    counter[t] += 1;
  } else {
    counter[t] = 1;
  }
});

console.log(
  check
    .split(" ")
    .map((t) => {
      if (counter[t]) {
        return counter[t];
      } else {
        return 0;
      }
    })
    .join(" ")
);
