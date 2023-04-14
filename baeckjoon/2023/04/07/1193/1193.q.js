const fs = require("fs");

const input = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

const x = Number(input);

// n 번째 대각선
const getLine = (num, n = 1) => {
  const max = ((1 + n) * n) / 2;

  if (num <= max) {
    return { count: n, max };
  }

  return getLine(num, n + 1);
};

const line = getLine(x);

if (line.count === 1) {
  console.log(`${line.count}/${line.count}`);
} else {
  const gap = line.max - x;
  if (line.count % 2) {
    console.log(`${1 + gap}/${line.count - gap}`);
  } else {
    console.log(`${line.count - gap}/${1 + gap}`);
  }
}
