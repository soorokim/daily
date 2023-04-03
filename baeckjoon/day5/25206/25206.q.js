const fs = require("fs");

const inputs = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

let totalSum = 0;
let sum = 0;
let pCount = 0;

for (let input of inputs) {
  const [name, points, value] = input.split(" ");
  if (value === "P") {
    pCount += 1;
  } else {
    let subjectPoint = 0;

    switch (value) {
      case "A+":
        subjectPoint = 4.5;
        break;
      case "A0":
        subjectPoint = 4.0;
        break;
      case "B+":
        subjectPoint = 3.5;
        break;
      case "B0":
        subjectPoint = 3.0;
        break;
      case "C+":
        subjectPoint = 2.5;
        break;
      case "C0":
        subjectPoint = 2.0;
        break;
      case "D+":
        subjectPoint = 1.5;
        break;
      case "D0":
        subjectPoint = 1.0;
        break;
      default:
        subjectPoint = 0;
    }

    totalSum += Number(points) * subjectPoint;
    sum += Number(points);
  }
}

console.log(totalSum / sum);
