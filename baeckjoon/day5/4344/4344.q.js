const fs = require("fs");

const inputs = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let results = inputs;
for (let c of croatia) {
  const divided = results.split(c);

  if (divided.length > 1) {
    results = divided.join("@");
  }
}

console.log(results.length);
