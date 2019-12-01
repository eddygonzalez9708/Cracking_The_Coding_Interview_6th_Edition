const TreeNode = require("./TreeNode");

class BST {
  constructor() {
    this.root = null;
  };

  create(arr) {
    if (arr.length) {
      const mid = Math.floor(arr.length / 2);
      this.root = new TreeNode(arr[mid]);
      this.createHelper(this.root, arr.slice(0, mid), arr.slice(mid + 1));
    }
  }

  createHelper(root, left, right) {
    if (!left.length && !right.length) {
      return;
    }

    if (left.length) {
      const mid = Math.floor(left.length / 2);
      root.left = new TreeNode(left[mid]);
      this.createHelper(root.left, left.slice(0, mid), left.slice(mid + 1));
    }

    if (right.length) {
      const mid = Math.floor(right.length / 2);
      root.right = new TreeNode(right[mid]);
      this.createHelper(root.right, right.slice(0, mid), right.slice(mid + 1));
    }
  }
};

module.exports = BST;