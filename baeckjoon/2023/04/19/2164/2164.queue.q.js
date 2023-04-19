const fs = require("fs");

const input = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim();

const n = Number(input);

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

for (let i = 1; i <= n; i++) {
  queue.push(i);
}

while (queue.size() !== 1) {
  queue.pop();
  const t = queue.pop();
  queue.push(t);
}

console.log(queue.front());
