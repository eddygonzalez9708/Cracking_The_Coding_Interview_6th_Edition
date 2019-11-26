class Graph {
  constructor() {
    this.nodes = {};
  };

  addNodes(...nodes) {
    for (let x = 0; x < nodes.length; x++) {
      if (!this.nodes[nodes[x].val]) {
        this.nodes[nodes[x].val] = nodes[x];
      } else {
        console.log("You cannot add a node with the same value.");
        return null;
      }
    }
  };

  routeBetweenNodes(node1, node2) {
    let queue = [];

    queue.push(node1);

    while(queue.length) {
      const node = queue.shift();
      const neighbors = Array.from(node.neighbors);

      for (let x = 0; x < neighbors.length; x++) {
        if (neighbors[x] === node2) {
          return true;
        }

        if (!neighbors[x].visited) {
          neighbors.visited = true;
          queue.push(neighbors[x]);
        }
      }
    }

    return false;
  };
};

module.exports = Graph;