const fs = require("fs");

const [count, ...inputs] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const [row, column] = count.split(" ").map(Number);

const MAX = 8;

const boards = inputs;

const cutBoards = [];
for (let r = 0; r < row - MAX + 1; r++) {
  for (let c = 0; c < column - MAX + 1; c++) {
    //보드를 잘라냄
    let cut = boards.slice(r, r + MAX).map((t) => t.slice(c, c + MAX));
    cutBoards.push(cut);
  }
}

const switchMap = {
  W: "B",
  B: "W",
};

let answer = MAX * MAX;

const checkBoard = [...cutBoards].map((t) => [...t]);

for (let board of checkBoard) {
  let changeCount = 0;
  for (let i in board) {
    for (let j in board[i]) {
      if (i === "0") {
        if (j === "0") continue;
        if (board[i][j] === board[i][j - 1]) {
          board[i] =
            board[i].slice(0, j) +
            switchMap[board[i][j]] +
            board[i].slice(Number(j) + 1);

          changeCount += 1;
        }
      } else if (j === "0") {
        if (board[i][j] === board[i - 1][j]) {
          board[i] = switchMap[board[i][j]] + board[i].slice(1);
          changeCount += 1;
        }
      } else {
        if (board[i][j] === board[i][j - 1]) {
          board[i] =
            board[i].slice(0, j) +
            switchMap[board[i][j]] +
            board[i].slice(Number(j) + 1);
          changeCount += 1;
        }
      }
    }
  }

  if (changeCount < answer) {
    answer = changeCount;
  }
}

for (let board of cutBoards) {
  let changeCount = 0;

  for (let i in board) {
    for (let j in board[i]) {
      if (i === "0") {
        if (j === "0") {
          board[i] = switchMap[board[i][j]] + board[i].slice(1);
          changeCount += 1;
        }
        if (board[i][j] === board[i][j - 1]) {
          board[i] =
            board[i].slice(0, j) +
            switchMap[board[i][j]] +
            board[i].slice(Number(j) + 1);

          changeCount += 1;
        }
      } else if (j === "0") {
        if (board[i][j] === board[i - 1][j]) {
          board[i] = switchMap[board[i][j]] + board[i].slice(1);
          changeCount += 1;
        }
      } else {
        if (board[i][j] === board[i][j - 1]) {
          board[i] =
            board[i].slice(0, j) +
            switchMap[board[i][j]] +
            board[i].slice(Number(j) + 1);
          changeCount += 1;
        }
      }
    }
  }

  if (changeCount < answer) {
    answer = changeCount;
  }
}
console.log(answer);
