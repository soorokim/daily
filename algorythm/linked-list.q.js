// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// const node1 = new Node(1);
// const node2 = new Node(2);

// const makeNode = (data, next = null) => {
//   return {
//     data: data,
//     next: next,
//   };
// };

// const node1 = makeNode(1);
// const head = node1;

// const add = (data) => {
//   let node = head;

//   while (node.next) {
//     node = node.next;
//   }

//   node.next = makeNode(data);
// };

// const desc = () => {
//   let node = head;

//   while (node.next) {
//     console.log(node.data);
//     node = node.next;
//   }
// };

// add(2);
// add(3);

// desc();

/**
 * Linked List
 * */
const makeLinkedList = (data) => {
  const makeNode = (data, next = null) => {
    return { data, next };
  };

  return {
    head: makeNode(data),
    findNode: function (searchValue) {
      let node = this.head;
      let search = false;
      while (!search) {
        node.data === searchValue ? (search = true) : (node = node.next);
        if (!node.next) {
          break;
        }
      }

      if (node.data === searchValue) search = true;
      if (search) return node;
      console.error(`${searchValue}을(를) 찾을 수 없습니다!`);
      return null;
    },
    add: function (data) {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = makeNode(data, null, node);
      this.tail = node.next;
    },
    addAfter: function (searchValue, data) {
      let node = this.head;
      let search = false;
      while (!search) {
        node.data === searchValue ? (search = true) : (node = node.next);
        if (!node.next) {
          break;
        }
      }

      if (node.data === searchValue) search = true;
      if (search) {
        const newNext = node.next ?? null;
        node.next = makeNode(data, newNext);
        return;
      }
      console.error(`${searchValue}을(를) 찾을 수 없습니다!`);
    },
    remove: function (value) {
      let node = this.head;
      let search = node.data === value;
      if (search) {
        // 첫 노드일때
        this.head = this.head.next;
        return;
      }
      while (!search) {
        node.next.data === value ? (search = true) : (node = node.next);

        if (!node.next.next) {
          search = node.next.data === value;
          break;
        }
      }

      if (!search) {
        console.error(`${value}을(를) 찾을 수 없습니다!`);
        return;
      }

      if (search) {
        // 중간, 마지막
        const newNext = node.next.next ?? null;
        node.next = newNext;
        return;
      }
    },
    desc: function () {
      let node = this.head;
      while (node.next) {
        console.log(node.data);
        node = node.next;
      }
      console.log(node.data);
    },
  };
};

/**
 * Double Linked List
 */
const makeDoubleLinkedList = (data) => {
  const makeNode = (data, next = null, prev = null) => {
    return { data, next, prev };
  };

  return {
    head: makeNode(data),
    tail: null,
    findNode: function (searchValue) {
      let node = this.head;
      let search = false;
      while (!search) {
        node.data === searchValue ? (search = true) : (node = node.next);
        if (!node.next) {
          break;
        }
      }

      if (node.data === searchValue) search = true;

      if (search) return node;
      console.error(`${searchValue}을(를) 찾을 수 없습니다!`);
      return null;
    },
    add: function (data) {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = makeNode(data, null, node);
      this.tail = node.next;
    },
    addAfter: function (searchValue, data) {
      const node = this.findNode(searchValue);
      if (node) node.next = makeNode(data, node.next, node);
      if (!node.next.next) this.tail = node.next;
    },
    remove: function (value) {
      const node = this.findNode(value);
      if (node.next && node.prev) {
        // 중간에 있는 노드일때
        node.prev.next = node.next;
      } else if (!node.next) {
        // 마지막 노드일때
        node.prev.next = null;
        this.tail = node.prev;
      } else if (!node.prev) {
        // 첫 노드일때
        this.head = node.next;
      }
    },
    desc: function () {
      let node = this.head;
      while (node.next) {
        console.log(node.data);
        node = node.next;
      }
      console.log(node.data);
    },
  };
};

const linkedList = makeLinkedList(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.addAfter(3, 20);
linkedList.remove(20);
linkedList.desc();
