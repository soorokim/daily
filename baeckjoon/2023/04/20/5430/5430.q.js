const fs = require("fs");

const [t, ...inputs] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const FRONT = true;
const BACK = false;

const answer = [];

for (let i = 1; i * 3 <= inputs.length; i++) {
  const cmd = inputs[3 * i - 3];
  const n = inputs[3 * i - 2];
  const arr = JSON.parse(inputs[3 * i - 1]);
  let direction = FRONT;
  let hasError = false;

  for (let c of cmd) {
    if (c === "R") {
      direction = !direction;
    } else {
      let res;
      if (direction === FRONT) {
        res = arr.shift();
      } else {
        res = arr.pop();
      }
      if (res === undefined) {
        hasError = true;
        break;
      }
    }
  }

  if (hasError) {
    answer.push("error");
  } else {
    if (!direction) {
      arr.reverse();
    }
    answer.push(JSON.stringify(arr));
  }
}

console.log(answer.join("\n"));
