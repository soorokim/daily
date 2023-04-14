const fs = require("fs");

const input = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

let value = Math.ceil(Number(input) / 4);

let output = "";

while (value !== 0) {
  output += "long ";
  value--;
}

console.log(output, "int");
