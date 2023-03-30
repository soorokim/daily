const fs = require("fs");

const inputs = fs
  //.readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

const value = Number(inputs);

if (value % 4 === 0 && value % 100 !== 0) {
  console.log(1);
} else if (value % 400 === 0) {
  console.log(1);
} else {
  console.log(0);
}
