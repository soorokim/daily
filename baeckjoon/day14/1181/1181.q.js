const fs = require("fs");

const [n, ...inputs] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

console.log(
  Array.from(new Set(inputs))
    .sort((a, b) => {
      if (a.length === b.length) {
        for (let i = 0; i < a.length; i++) {
          if (a[i] === b[i]) continue;

          if (a[i].charCodeAt() - b[i].charCodeAt() < 0) {
            return -1;
          } else {
            return 1;
          }
        }
      }
      return a.length - b.length;
    })
    .join("\n")
);
