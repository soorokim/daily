const fs = require("fs");

const input = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

const num = Number(input);
// const max = Math.pow(2, n) - 1;

// let result = [];

// const first = new Array(n).fill().map((_, i) => i + 1);

// const findWay = (f, s, t, c, r) => {
//   if (c > max) {
//     return;
//   }

//   if (f[0] > f[1] || s[0] > s[1] || t[0] > t[1]) {
//     return;
//   }

//   if (t.length === n) {
//     result = [...r];
//     return;
//   }

//   if (r.length === 0) {
//     const [fItem, ...rest] = f;
//     findWay([...rest], [fItem], [], c + 1, [`${fItem} 2`]);
//     findWay([...rest], [], [fItem], c + 1, [`${fItem} 3`]);
//   } else {
//     if (f.length) {
//       const [fItem, ...rest] = f;
//       findWay([...rest], [fItem, ...s], [...t], c + 1, [...r, `${fItem} 2`]);
//       findWay([...rest], [...s], [fItem, ...t], c + 1, [...r, `${fItem} 3`]);
//     }
//     if (s.length) {
//       const [fItem, ...rest] = s;
//       findWay([fItem, ...f], [...rest], [...t], c + 1, [...r, `${fItem} 1`]);
//       findWay([...f], [...rest], [fItem, ...t], c + 1, [...r, `${fItem} 3`]);
//     }
//     if (t.length) {
//       const [fItem, ...rest] = t;
//       findWay([fItem, ...f], [...s], [...rest], c + 1, [...r, `${fItem} 1`]);
//       findWay([...f], [fItem, ...s], [...rest], c + 1, [...r, `${fItem} 2`]);
//     }
//   }
// };

// findWay([...first], [], [], 0, []);

// console.log([max, ...result].join("\n"));

const res = [Math.pow(2, num) - 1];
const hanoi = (n, start, mid, to) => {
  if (n === 1) {
    res.push(`${start} ${to}`);
    return;
  }

  hanoi(n - 1, start, to, mid);

  res.push(`${start} ${to}`);

  hanoi(n - 1, mid, start, to);
};

hanoi(num, 1, 2, 3);
console.log(res.join("\n"));
