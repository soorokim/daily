const fs = require("fs");

const [_, ...inputs] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const set = new Set();
inputs.forEach((t) => {
  const [name, behavior] = t.split(" ");
  if (behavior === "leave") {
    if (set.has(name)) {
      set.delete(name);
    }
  } else {
    set.add(name);
  }
});

console.log([...set].sort().reverse().join("\n"));
