import java.util.ArrayList;

public class Graph {
  ArrayList<Node> nodes = new ArrayList<Node>();

  public void addNode(Node n) {
    this.nodes.add(n);
  }

  public ArrayList<Node> getNodes() {
    return this.nodes;
  }
}