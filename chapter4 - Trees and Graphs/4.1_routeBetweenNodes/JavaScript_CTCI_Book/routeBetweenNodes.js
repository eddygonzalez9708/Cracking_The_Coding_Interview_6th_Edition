var Graph = require("./Graph");
var Queue = require("./Queue");

// Concurrently implement BFS on both sides of the graph
// Intention is to minimize the levels that the graph has to search

var checkRoute = function(value1, value2, graph) {
  var q1 = new Queue();
  var q2 = new Queue();

  var visited1 = {};
  var visited2 = {};

  // Insert values into qs
  visited1[value1] = true;
  visited2[value2] = true;

  if (graph.hasNode(value1)) {
    for (var edge in graph.findEdges(value1)) {
      q1.add(edge);
    }
  }

  if (graph.hasNode(value2)) {
    for (var edge in graph.findEdges(value2)) {
      q2.add(edge);
    }
  }

  // Take turns dequeueing until empty
  var nextEdge1;
  var nextEdge2;

  while(!q1.isEmpty() || !q2.isEmpty()) {
    // If has queue, return true
    if (!q1.isEmpty()) {
      nextEdge1 = q1.remove();
      
      if (nextEdge1 === value2) {
        return true;
      }

      if (visited1[nextEdge1] === undefined) {
        visited1[nextEdge1] = true;

        if (graph.hasNode(nextEdge1)) {
          for (var edge in graph.findEdges(nextEdge1)) {
            if (visited1[edge] === undefined) {
              q1.add(edge);
            }
          }
        }
      }
    }

    if (!q2.isEmpty()) {
      nextEdge2 = q2.remove();

      if (nextEdge2 === value1) {
        return true;
      }

      if (visited2[nextEdge2] === undefined) {
        visited2[nextEdge2] = true;

        if (graph.hasNode(nextEdge2)) {
          for (var edge in graph.findEdges(nextEdge2)) {
            if (visited2[edge] === undefined) {
              q2.add(edge);
            }
          }
        }
      }
    }
  }

  return false;
};

/* TEST */

var graph = new Graph();

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');

console.log(checkRoute('A', 'C', graph), true);
console.log(checkRoute('A', 'E', graph), false);
console.log(checkRoute('B', 'A', graph), true);
console.log(checkRoute('D', 'E', graph), true);