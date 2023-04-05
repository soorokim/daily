const makeTree = (initValue) => {
  const createNode = (value) => {
    return {
      value,
      left: null,
      right: null,
    };
  };

  return {
    head: createNode(initValue),
    insert: function (input) {
      let node = this.head;
      while (true) {
        if (input > node.value) {
          if (node.right) {
            node = node.right;
            continue;
          } else {
            node.right = createNode(input);
            break;
          }
        } else {
          if (node.left) {
            node = node.left;
            continue;
          } else {
            node.left = createNode(input);
            break;
          }
        }
      }
    },
    search: function (input) {
      let node = this.head;
      while (node) {
        if (input === node.value) {
          return true;
        } else if (input > node.value) {
          node = node.right;
          continue;
        } else {
          node = node.left;
          continue;
        }
      }
      return false;
    },
    delete: function (input) {
      let node = this.head;
      let parent = this.head;
      let childSide = "";
      while (node) {
        // 중간인 경우
        if (input === node.value) {
          let temp;
          let tempHead;
          if (childSide.length) {
            if (node.right && node.left) {
              temp = node.left;
              parent[childSide] = node.right;
              tempHead = parent[childSide];
            } else {
              parent[childSide] = node.left ?? node.right;
              return;
            }
          } else {
            // head인 경우
            if (node.right && node.left) {
              temp = node.left;
              this.head = node.right;
              tempHead = this.head;
            } else {
              this.head = node.left ?? node.right;
              return;
            }
          }

          while (tempHead) {
            if (!tempHead.left) {
              tempHead.left = temp;
              return;
            }
            tempHead = tempHead.left;
          }
        } else if (input > node.value) {
          parent = node;
          childSide = "right";
          node = node.right;
        } else {
          parent = node;
          childSide = "left";
          node = node.left;
        }
      }
    },
  };
};

let numList = new Set();
while (numList.size < 500) {
  numList.add(Math.floor(Math.random() * 1000) + 1);
}

const numArr = Array.from(numList);

const tree = makeTree(500);

const searchTest = () => {
  numArr.forEach((n) => tree.insert(n));

  numArr.forEach((n) => {
    if (!tree.search(n)) {
      console.log("search test is Fail");
    }
  });
};

const deleteTest = () => {
  // head 삭제 테스트
  const deleteNumList = numArr.filter(() => Math.random() * 10 > 7);
  deleteNumList.forEach((n) => tree.delete(n));

  const existNumList = numArr.filter((n) =>
    deleteNumList.find((a) => a === n) ? false : true
  );

  // 삭제한 노드리스트와 존재하는의 합이 전체의 합과 일치하는지 확인
  //   console.log(deleteNumList.length + existNumList.length === numArr.length);
  existNumList.forEach((n) => {
    if (!tree.search(n)) {
      console.log("delete test is Fail" + n);
    }
  });

  tree.delete(500);
  if (tree.search(500) && !existNumList.find((t) => t === 500)) {
    console.log("hi??", tree);
  }
};

function testByCount(n) {
  for (let i = 0; i < n; i++) {
    searchTest();
    deleteTest();
  }
  console.log("test finish!");
}

testByCount(20);
