const fs = require("fs");

const inputs = fs
  //.readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split(" ");

const h = Number(inputs[0]);
const m = Number(inputs[1]);

const gapM = 45;

let resultsH = h;
let resultsM = m - gapM;

if (resultsM < 0) {
  resultsH -= 1;
  resultsM += 60;
}

if (resultsH < 0) {
  resultsH += 24;
}

console.log(`${resultsH} ${resultsM}`);
