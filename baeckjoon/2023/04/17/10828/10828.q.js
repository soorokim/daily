const fs = require("fs");

const [_, ...commends] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const arr = [];
const answer = [];
for (let c of commends) {
  const [commend, num] = c.split(" ");
  let result;

  switch (commend) {
    case "push": {
      arr.push(num);
      continue;
    }
    case "pop": {
      result = arr.pop();
      break;
    }
    case "size": {
      result = arr.length;
      break;
    }
    case "empty": {
      result = arr.length ? 0 : 1;
      break;
    }
    case "top": {
      result = arr[arr.length - 1];
      break;
    }
    default:
      break;
  }

  answer.push(result ?? -1);
}

console.log(answer.join("\n"));
