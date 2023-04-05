const fs = require("fs");

const [[n], ...inputs] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => t.split(" ").map(Number));

const board = [];
for (let i = 0; i < 100; i++) {
  board[i] = [];

  for (let j = 0; j < 100; j++) {
    board[i][j] = false;
  }
}

const BORDER_LENGTH = 10;

let count = 0;

for (const [minX, minY] of inputs) {
  for (let x = minX; x < minX + BORDER_LENGTH; x++) {
    for (let y = minY; y < minY + BORDER_LENGTH; y++) {
      if (!board[x - 1][y - 1]) {
        board[x - 1][y - 1] = true;
        count += 1;
      }
    }
  }
}

console.log(count);
