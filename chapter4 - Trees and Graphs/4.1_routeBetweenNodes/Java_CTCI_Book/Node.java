import java.util.ArrayList;

public class Node {
  State state;
  String val;
  ArrayList<Node> adjacentNodes = new ArrayList<Node>();

  Node(String val) {
    this.val = val;
  }

  public void addAdjacent(Node n) {
    this.adjacentNodes.add(n);
  }

  public ArrayList<Node> getAdjacent() {
    return this.adjacentNodes;
  }
}