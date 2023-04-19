const fs = require("fs");

const [_, ...commends] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

// const makeQueue = () => {
//   const makeNode = (value) => {
//     return {
//       value,
//       next: null,
//     };
//   };
//   return {
//     _front: null,
//     _back: null,
//     _size: 0,
//     push: function (value) {
//       if (!this._front) {
//         this._front = makeNode(value);
//         this._back = this._front;
//       } else if (this._size === 1) {
//         this._back = makeNode(value);
//         this._front.next = this._back;
//       } else {
//         this._back.next = makeNode(value);
//         this._back = this._back.next;
//       }
//       this._size += 1;
//     },
//     pop: function () {
//       if (this._size === 0) {
//         return -1;
//       }
//       const tmp = this._front;
//       if (this._size === 1) {
//         this._front = null;
//         this._back = null;
//       } else if (this._size === 2) {
//         this._front = this._back;
//       } else {
//         this._front = this._front.next;
//       }
//       this._size -= 1;
//       return tmp.value;
//     },
//     empty: function () {
//       return this._size ? 0 : 1;
//     },
//     back: function () {
//       return this._back ? this._back.value : -1;
//     },
//     front: function () {
//       return this._front ? this._front.value : -1;
//     },
//     size: function () {
//       return this._size;
//     },
//   };
// };

// const queue = makeQueue();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this._front = null;
    this._back = null;
    this._size = 0;
  }

  push(value) {
    if (this._size === 0) {
      this._front = new Node(value);
      this._back = this._front;
    } else if (this._size === 1) {
      this._back = new Node(value);
      this._front.next = this._back;
    } else {
      this._back.next = new Node(value);
      this._back = this._back.next;
    }
    this._size += 1;
  }
  pop() {
    if (this._size === 0) {
      return -1;
    }
    const tmp = this._front;
    if (this._size === 1) {
      this._front = null;
      this._back = null;
    } else if (this._size === 2) {
      this._front = this._back;
    } else {
      this._front = this._front.next;
    }

    this._size -= 1;
    return tmp.value;
  }
  empty() {
    return this._size ? 0 : 1;
  }
  back() {
    return this._back ? this._back.value : -1;
  }
  front() {
    return this._front ? this._front.value : -1;
  }
  size() {
    return this._size;
  }
}

const queue = new Queue();

let results = "";
for (let c of commends) {
  const [commend, n] = c.split(" ");
  let res = queue[commend](n);
  if (res !== undefined) {
    results += res + " ";
  }
}

console.log(results.trim().split(" ").join("\n"));
