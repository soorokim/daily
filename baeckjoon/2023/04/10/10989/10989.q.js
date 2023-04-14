const fs = require("fs");

const inputs = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const swap = (arr, index1, index2) => {
  const t = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = t;
};

const partition = (arr, start, end, pivotIndex) => {
  const pivot = arr[pivotIndex];
  let storedIndex = start;
  swap(arr, end, pivotIndex);
  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, storedIndex);
      storedIndex += 1;
    }
  }
  swap(arr, storedIndex, end);
  return storedIndex;
};

const quickSort = (arr, left, right) => {
  if (left < right) {
    const newPivotIndex = partition(
      arr,
      left,
      right,
      Math.floor((left + right) / 2)
    );
    quickSort(arr, left, newPivotIndex - 1);
    quickSort(arr, newPivotIndex + 1, right);
  }
};

quickSort(inputs, 0, inputs.length - 1);
console.log(inputs.reduce((prev, curr) => `${prev}\n${curr}`));
