const fs = require("fs");

const [n, ...penny] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const getCount = (p, unit) => {
  return {
    count: Math.floor(p / unit),
    rest: p % unit,
  };
};

penny.forEach((p) => {
  const countOfQuarter = getCount(p, 25);
  const countOfDime = getCount(countOfQuarter.rest, 10);
  const countOfNickel = getCount(countOfDime.rest, 5);
  console.log(
    countOfQuarter.count,
    countOfDime.count,
    countOfNickel.count,
    countOfNickel.rest
  );
});
