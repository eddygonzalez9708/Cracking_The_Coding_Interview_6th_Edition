class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    if (val < this.val) {
      if (this.left === null) {
        this.left = new TreeNode(val);
      } else {
        this.left.insert(val);
      }
    } else {
      if (this.right === null) {
        this.right = new TreeNode(val);
      } else {
        this.right.insert(val);
      }
    }
  }
}

module.exports = TreeNode;