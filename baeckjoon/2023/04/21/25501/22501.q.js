const fs = require("fs");

const [_, ...words] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

const recursion = (s, l, r, c) => {
  if (l >= r) return [1, c];
  else if (s[l] !== s[r]) return [0, c];
  else return recursion(s, l + 1, r - 1, c + 1);
};

const isPalindrome = (s) => {
  return recursion(s, 0, s.length - 1, 1);
};

const results = [];
for (let word of words) {
  results.push(isPalindrome(word).join(" "));
}

console.log(results.join("\n"));
