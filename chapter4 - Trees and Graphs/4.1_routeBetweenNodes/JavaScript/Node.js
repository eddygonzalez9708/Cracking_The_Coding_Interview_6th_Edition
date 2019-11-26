class Node {
  constructor(val) {
    this.val = val;
    this.visited = false;
    this.neighbors = new Set();
  };

  addNeighbor(...nodes) {
    for (let x = 0; x < nodes.length; x++) {
      this.neighbors.add(nodes[x]);
    }
  };
};

module.exports = Node;