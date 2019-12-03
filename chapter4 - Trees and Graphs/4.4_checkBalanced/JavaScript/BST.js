const TreeNode = require("./TreeNode");

class BST {
  constructor(val) {
    this.root = new TreeNode(val);
  }

  insert(val) {
    this.root.insert(val);
  }

  printLevel() {
    let q = [];
    let nextq = [];
    let level = []

    q.push(this.root);
    
    while (q.length) {
      const currNode = q.shift();
      level.push(currNode.val);

      if (currNode.left) {
        nextq.push(currNode.left);
      }

      if (currNode.right) {
        nextq.push(currNode.right);
      }

      if (!q.length) {
        console.log(level);
        q = [...nextq];
        nextq = [];
        level = [];
      }
    }
  }
}

module.exports = BST;