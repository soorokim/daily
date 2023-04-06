const fs = require("fs");

const [n, b] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split(" ");

console.log(parseInt(n, b));

// console.log("A".charCodeAt());
// const reverseN = n.split("").reverse();

// for (let i in n) {
//   const c = n[i];
//   if (parseInt(c)) {
//     console.log(parseInt(c));
//   } else {
//     (c.charCodeAt() - 54) * Math.abs());
//   }
// }
