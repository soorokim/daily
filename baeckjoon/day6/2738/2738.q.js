const fs = require("fs");

const [[n, m], ...inputs] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => t.split(" ").map(Number));

let temp = [...inputs];

const array2 = temp.splice(n);

for (let i in temp) {
  let line = [];
  for (let j in temp[i]) {
    line.push(temp[i][j] + array2[i][j]);
  }
  console.log(line.join(" "));
}
