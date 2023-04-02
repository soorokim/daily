const fs = require("fs");

const inputs = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

let value = inputs.split("");

if (inputs.length % 2 !== 0) {
  const results =
    value
      .splice(0, inputs.length / 2)
      .reverse()
      .join("") === value.splice(1).join("")
      ? 1
      : 0;

  console.log(results);
} else {
  const results =
    value
      .splice(0, inputs.length / 2)
      .reverse()
      .join("") === value.join("")
      ? 1
      : 0;
  console.log(results);
}
