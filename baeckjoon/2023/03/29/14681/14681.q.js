const fs = require("fs");

const inputs = fs
  //.readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const x = Number(inputs[0]);
const y = Number(inputs[1]);

if (x > 0 && y > 0) {
  console.log(1);
} else if (x < 0 && y > 0) {
  console.log(2);
} else if (x < 0 && y < 0) {
  console.log(3);
} else {
  console.log(4);
}
