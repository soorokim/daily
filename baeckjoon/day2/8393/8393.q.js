const fs = require("fs");

const input = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

let value = Number(input);
let sum = 0;

while (value !== 0) {
  sum += value--;
}

console.log(sum);
// const recursive = (n, sum) => {
//   if (n === 0) {
//     return sum;
//   }

//   return recursive(n - 1, sum + n);
// };

// let a = recursive(value, 0);
// console.log(a);
