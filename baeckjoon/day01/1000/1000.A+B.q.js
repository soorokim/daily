const inputs = fs
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

let results = 0;

for (let t of inputs[0].split(" ").map(Number)) {
  results += t;
}

console.log(results);
