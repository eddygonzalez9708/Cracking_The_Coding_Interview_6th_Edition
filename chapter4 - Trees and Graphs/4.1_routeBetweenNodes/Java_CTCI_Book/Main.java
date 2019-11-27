import java.util.LinkedList;

enum State { Unvisited, Visited, Visiting; }

public class Main {
  public static boolean search(Graph g, Node start, Node end) {
    // if (start == end) return true;

    // Operates as Queue
    LinkedList<Node> q = new LinkedList<Node>();

    for (Node u : g.getNodes()) {
      u.state = State.Unvisited;
    }

    start.state = State.Visiting;
    q.add(start);
    Node u;

    while (!q.isEmpty()) {
      u = q.removeFirst(); // i.e., dequeue()
      for (Node v : u.getAdjacent()) {
        if (v.state == State.Unvisited || v == end) {
          if (v == end) {
            return true;
          } else {
            v.state = State.Visiting;
            q.add(v);
          }
        }
      }

      u.state = State.Visited;
    }

    return false;
  }
  
  public static void main(String args[]) {
    // Test 1
    Node n1 = new Node("1");
    Node n2 = new Node("2");
    Node n3 = new Node("3");

    n1.addAdjacent(n2);
    n2.addAdjacent(n3);
    n3.addAdjacent(n1);

    Graph g1 = new Graph();

    g1.addNode(n1);
    g1.addNode(n2);
    g1.addNode(n3);

    System.out.println(search(g1, n1, n1) + " " + true);
    System.out.println(search(g1, n1, n2) + " " + true);
    System.out.println(search(g1, n1, n3) + " " + true);

    System.out.println(search(g1, n2, n1) + " " + true);
    System.out.println(search(g1, n2, n2) + " " + true);
    System.out.println(search(g1, n2, n3) + " " + true);

    System.out.println(search(g1, n3, n1) + " " + true);
    System.out.println(search(g1, n3, n2) + " " + true);
    System.out.println(search(g1, n3, n3) + " " + true);

    // Test 2

    Node n4 = new Node("4");
    Node n5 = new Node("5");
    Node n6 = new Node("6");
    Node n7 = new Node("7");

    n4.addAdjacent(n5);
    n5.addAdjacent(n6);
    n6.addAdjacent(n4);
    n6.addAdjacent(n7);

    Graph g2 = new Graph();

    g2.addNode(n4);
    g2.addNode(n5);
    g2.addNode(n6);
    g2.addNode(n7);

    System.out.println(search(g2, n4, n4) + " " + true);
    System.out.println(search(g2, n4, n5) + " " + true);
    System.out.println(search(g2, n4, n6) + " " + true);
    System.out.println(search(g2, n4, n7) + " " + true);

    System.out.println(search(g2, n5, n4) + " " + true);
    System.out.println(search(g2, n5, n5) + " " + true);
    System.out.println(search(g2, n5, n6) + " " + true);
    System.out.println(search(g2, n5, n7) + " " + true);

    System.out.println(search(g2, n6, n4) + " " + true);
    System.out.println(search(g2, n6, n5) + " " + true);
    System.out.println(search(g2, n6, n6) + " " + true);
    System.out.println(search(g2, n6, n7) + " " + true);

    System.out.println(search(g2, n7, n4) + " " + false);
    System.out.println(search(g2, n7, n5) + " " + false);
    System.out.println(search(g2, n7, n6) + " " + false);
    System.out.println(search(g2, n7, n7) + " " + false);
  }
}