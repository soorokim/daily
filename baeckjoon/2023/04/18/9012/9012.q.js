const fs = require("fs");

const [_, ...inputs] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const answer = [];
// for (let v of inputs) {
//   let t = [];
//   let isNo = false;
//   for (x of v) {
//     if (x === "(") {
//       t.push(x);
//     } else if (x === ")") {
//       if (!t.pop()) {
//         isNo = true;
//         break;
//       }
//     }
//   }
//   if (t.length || isNo) {
//     answer.push("NO");
//   } else {
//     answer.push("YES");
//   }
// }

for (let v of inputs) {
  let t = 0;

  for (x of v) {
    if (x === "(") {
      t += 1;
    } else if (x === ")") {
      t -= 1;
      if (t < 0) {
        break;
      }
    }
  }
  if (t === 0) {
    answer.push("YES");
  } else {
    answer.push("NO");
  }
}

console.log(answer.join("\n"));
