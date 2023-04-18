const fs = require("fs");

const inputs = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const answer = [];

for (let v of inputs.slice(0, inputs.length - 1)) {
  let t = [];
  let isNo = false;
  for (x of v) {
    if (x === "(") {
      t.push(x);
    } else if (x === ")") {
      if (t.pop() !== "(") {
        isNo = true;
        break;
      }
    } else if (x === "[") {
      t.push(x);
    } else if (x === "]") {
      if (t.pop() !== "[") {
        isNo = true;
        break;
      }
    }
  }

  if (t.length || isNo) {
    answer.push("no");
  } else {
    answer.push("yes");
  }
}

console.log(answer.join("\n"));
