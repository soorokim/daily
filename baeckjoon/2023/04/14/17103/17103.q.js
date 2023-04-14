const fs = require("fs");

const [_, ...inputs] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 이런 생각은 언제 해야하는걸까.
const primeList = new Array(1000001).fill(true);
primeList[0] = false;
primeList[1] = false;

const sqrt = Math.floor(Math.sqrt(1000001));

for (let i = 2; i < sqrt; i++) {
  if (!primeList[i]) continue;
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    // 이부분이 특히 .. ㅠㅠ 이런생각을 해야된다.
    for (let k = i + i; k <= 1000001; k += i) {
      primeList[k] = false;
    }
  }
}

const answer = [];
inputs.forEach((t) => {
  let count = 0;
  for (let i = 2; i <= Math.floor(t / 2); i++) {
    if (primeList[i] && primeList[t - i]) {
      count += 1;
    }
  }
  answer.push(count);
  // console.log(count);
});

console.log(answer.join("\n"));
