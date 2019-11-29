const Node = require("./Node");

class MinimalTree {
  constructor() {
    this.root = null;
  };

  create(arr) {
    if (!this.root) {
      const mid = Math.ceil(arr.length / 2) - 1;
      this.root = new Node(arr[mid]);
      this.insert(this.root, arr.slice(0, mid), arr.slice(mid + 1));
    }
  };

  insert(node, leftArr, rightArr) {
    if (!leftArr.length && !rightArr.length) {
      return;
    }

    if (leftArr.length) {
      const midLeft = Math.ceil(leftArr.length / 2) - 1;
      node.left = new Node(leftArr[midLeft]);
      this.insert(node.left, leftArr.slice(0, midLeft), leftArr.slice(midLeft + 1));
    }

    if (rightArr.length) {
      const midRight = Math.ceil(rightArr.length / 2) - 1;
      node.right = new Node(rightArr[midRight]);
      this.insert(node.right, rightArr.slice(0, midRight), rightArr.slice(midRight + 1));
    }
  };
};

module.exports = MinimalTree;