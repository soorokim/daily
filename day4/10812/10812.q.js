const fs = require("fs");

const [[n, m], ...values] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => t.split(" ").map(Number));

let length = n;
let buckets = [];
while (length !== 0) {
  buckets.push(n - length + 1);
  length -= 1;
}

values.map(([i, j, k]) => {
  const first = buckets.slice(0, i - 1);
  const last = buckets.slice(j);
  const slicedFirst = buckets.slice(i - 1, k - 1);
  const slicedLast = buckets.slice(k - 1, j);
  buckets = [...first, ...slicedLast, ...slicedFirst, ...last];
});

console.log(buckets.join(" "));
