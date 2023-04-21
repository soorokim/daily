const fs = require("fs");

const [n, ...inputs] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/test.txt")
  .toString()
  .trim()
  .split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.before = null;
  }
}

class Dequeue {
  constructor() {
    this._front = null;
    this._back = null;
    this._size = 0;
  }
  push_front(value) {
    if (this._size === 0) {
      this._front = new Node(value);
      this._back = this._front;
    } else {
      this._front.before = new Node(value);
      const tmp = this._front;
      this._front = this._front.before;
      this._front.next = tmp;
    }
    this._size += 1;
  }
  push_back(value) {
    if (this._size === 0) {
      this._front = new Node(value);
      this._back = this._front;
    } else if (this._size === 1) {
      this._back = new Node(value);
      this._front.next = this._back;
      this._back.before = this._front;
    } else {
      const tmp = this._back;
      this._back.next = new Node(value);
      this._back = this._back.next;
      this._back.before = tmp;
    }
    this._size += 1;
  }
  pop_front() {
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
  pop_back() {
    if (this._size === 0) {
      return -1;
    }
    const tmp = this._back;
    if (this._size === 1) {
      this._front = null;
      this._back = null;
    } else if (this._size === 2) {
      this._back = this._front;
    } else {
      this._back = this._back.before;
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

const dequeue = new Dequeue();

const answer = [];

for (let c of inputs) {
  const [commend, n] = c.split(" ");
  const res = dequeue[commend](n);
  if (res !== undefined) {
    answer.push(res);
  }
}

console.log(answer.join("\n"));
