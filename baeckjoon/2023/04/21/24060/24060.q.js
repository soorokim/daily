const fs = require("fs");

const [ak, arr] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const [a, k] = ak.split(" ");
const array = arr.split(" ").map(Number);

let c = 0;
const mergeSort = (a, p, r) => {
  if (p < r) {
    const q = Math.floor((p + r) / 2);
    mergeSort(a, p, q);
    mergeSort(a, q + 1, r);
    merge(a, p, q, r);
  }
};

const memory = [];

const merge = (a, p, q, r) => {
  let i = p;
  let j = q + 1;
  const tmp = [];
  while (i <= q && j <= r) {
    if (a[i] < a[j]) {
      tmp.push(a[i++]);
    } else {
      tmp.push(a[j++]);
    }
  }
  while (i <= q) {
    tmp.push(a[i++]);
  }
  while (j <= r) {
    tmp.push(a[j++]);
  }
  i = p;
  let t = 0;
  while (i <= r) {
    memory.push(tmp[t]);
    a[i++] = tmp[t++];
  }
};

mergeSort(array, 0, array.length - 1);

if (memory.length - 1 < Number(k)) {
  console.log(-1);
} else {
  console.log(memory[k - 1]);
}
