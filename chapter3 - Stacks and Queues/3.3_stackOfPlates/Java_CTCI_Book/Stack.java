public class Stack {
  private int capacity;
  public Node top, bottom;
  public int size = 0;

  public Stack(int capacity) {
    this.capacity = capacity;
  }

  public boolean isFull() {
    return this.capacity == this.size;
  }

  public void join(Node above, Node below) {
    if (below != null) below.above = above;
    if (above != null) above.below = below;
  }

  public boolean push(int v) {
    if (this.size >= this.capacity) return false;
    size++;
    Node n = new Node(v);
    if (this.size == 1) this.bottom = n;
    join(n, this.top);
    this.top = n;
    return true;
  }

  public int pop() {
    Node t = top;
    this.top = this.top.below;
    size--;
    return t.value;
  }

  public boolean isEmpty() {
    return this.size == 0;
  }

  public int removeBottom() {
    Node b = this.bottom;
    this.bottom = this.bottom.above;

    if (this.bottom != null) this.bottom.below = null;
    size--;
    return b.value;
  }
}