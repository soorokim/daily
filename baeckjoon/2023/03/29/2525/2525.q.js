const fs = require("fs");

const inputs = fs
  //.readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const [h, m] = inputs[0].split(" ").map(Number);
const gapM = Number(inputs[1]);

let resultsH = h;
let resultsM = m + gapM;

const MAX_MIN = 60;
const MAX_HOUR = 24;

if (resultsM > MAX_MIN) {
  resultsH += Math.floor(resultsM / MAX_MIN);
  resultsM %= MAX_MIN;
} else if (resultsM === MAX_MIN) {
  resultsM = 0;
  resultsH += 1;
}

if (resultsH > MAX_HOUR) {
  resultsH %= 24;
} else if (resultsH === MAX_HOUR) {
  resultsH = 0;
}

console.log(`${resultsH} ${resultsM}`);
