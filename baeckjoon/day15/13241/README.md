# 문제풀기전 생각정리

1. 뭐?..유클리드 호제법?...그게 무슨말이지...문제도 무슨말인지 모르겠다.
2. 일단 BigInt를 사용해야하는건 알겠다;

# 문제풀이 후

1. BigInt를 안써도 됐다.

javascript Number의 범위는 100000000보다 크다.

```js
const biggestInt = Number.MAX_SAFE_INTEGER; //  (2**53 - 1) =>  9007199254740991
const smallestInt = Number.MIN_SAFE_INTEGER; // -(2**53 - 1) => -9007199254740991
```
