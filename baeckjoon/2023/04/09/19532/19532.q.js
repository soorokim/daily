const fs = require("fs");

const [a, b, c, d, e, f] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let isFind = false;
// for (let x = -999; x <= 999; x++) {
//   for (let y = -999; y <= 999; y++) {
//     if (a * x + b * y - c === d * x + e * y - f) {
//       console.log(a * x + b * y - c);
//       console.log(d * x + e * y - f);

//       console.log(x, y);
//       isFind = true;
//       break;
//     }
//   }
//   if (isFind) break;
// }
const x = (c * e - f * b) / (a * e - d * b);
const y = (c * d - f * a) / (b * d - e * a);

console.log(x + 0, y + 0);
