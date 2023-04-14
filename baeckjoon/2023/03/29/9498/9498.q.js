const fs = require("fs");

const inputs = fs
  //.readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

const value = Number(inputs);

if (value >= 90) {
  console.log("A");
} else if (value >= 80) {
  console.log("B");
} else if (value >= 70) {
  console.log("C");
} else if (value >= 60) {
  console.log("D");
} else {
  console.log("F");
}
