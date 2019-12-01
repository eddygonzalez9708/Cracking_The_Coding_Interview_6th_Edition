const LinkedList = require("./LinkedList");

function create(root) {
  let queue = [];
  let tempQueue = [];
  let linkedList = new LinkedList();
  
  const arr = [];

  queue.push(root);

  while (queue.length) {
    const node = queue.shift();
    linkedList.add(node.val);

    if (node.left) {
      tempQueue.push(node.left);
    }

    if (node.right) {
      tempQueue.push(node.right);
    }

    if (!queue.length) {
      arr.push(linkedList);
      queue = [...tempQueue];
      tempQueue = [];
      linkedList = new LinkedList();
    }
  }

  return arr;
};

function printLevel(arr) {
  arr.forEach(list => {
    let node = list.top;
    let tempArr = [];
    
    while (node) {
      tempArr.push(node.val);
      node = node.next;
    }

    console.log(tempArr);
  });
};

module.exports = {
  create,
  printLevel
};