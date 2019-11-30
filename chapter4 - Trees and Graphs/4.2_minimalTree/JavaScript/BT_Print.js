let mainQueue = [];
let levelArr = [];
let tempArr = [];

function inOrderPrint(root) {
  if (root.left) {
    inOrderPrint(root.left);
  }

  console.log(root.val);

  if (root.right) {
    inOrderPrint(root.right);
  }
};

function printLevel(root) {
  mainQueue.push(root);

  while (mainQueue.length) {
    const currNode = mainQueue.shift();
    levelArr.push(currNode.val);

    if (currNode.left) {
      tempArr.push(currNode.left);
    }

    if (currNode.right) {
      tempArr.push(currNode.right);
    }

    if (!mainQueue.length) {
      console.log(levelArr.join(' '));
      mainQueue = [...tempArr];
      tempArr = [];
      levelArr = [];
    }
  }
}

module.exports = { 
  inOrderPrint,
  printLevel
};