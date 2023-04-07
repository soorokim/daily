let numList = new Set();
while (numList.size < 100) {
  numList.add(Math.floor(Math.random() * 1000) + 1);
}

const numArr = Array.from(numList);

// 새로운 array를 만들어내기 때문에 공간복잡도가 너무 높다.
const quickSort1 = (input = []) => {
  if (input.length < 2) {
    return input;
  }

  const pivot = input.pop();
  const left = [];
  const right = [];

  input.forEach((num) => {
    if (num < pivot) {
      left.push(num);
    } else if (num > pivot) {
      right.push(num);
    }
  });

  return [...quickSort1(left), pivot, ...quickSort1(right)];
};

const swap = (arr, index1, index2) => {
  const t = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = t;
};

const partition = (arr, left, right, pivotIndex) => {
  const pivot = arr[pivotIndex];
  let storedIndex = left;
  swap(arr, right, pivotIndex);
  for (let i = left; i < right; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, storedIndex);
      storedIndex++;
    }
  }
  swap(arr, right, storedIndex);

  return storedIndex;
};

// 위키피디아를 참고해서 다시 만들었다...하ㅠㅠ 참고하기 싫었는데 나중에 다시 한번 만들어봐야겠다.
const quickSort2 = (input, left, right) => {
  if (left < right) {
    const newIndex = partition(
      input,
      left,
      right,
      Math.floor((left + right) / 2)
    );

    quickSort2(input, left, newIndex - 1);
    quickSort2(input, newIndex + 1, right);
  }
};

const sorted = [...numArr].sort((a, b) => a - b);

quickSort2(numArr, 0, numArr.length - 1);

const checkIsSorted = () => {
  let results = true;
  sorted.forEach((v, i) => {
    if (v !== numArr[i]) {
      results = false;
    }
  });
  return results;
};

console.log(checkIsSorted());
