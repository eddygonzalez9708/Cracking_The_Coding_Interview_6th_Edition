import java.util.Stack;

public class MyQueue {
  Stack<Integer> stackNewest, stackOldest;

  public MyQueue() {
    stackNewest = new Stack<Integer>();
    stackOldest = new Stack<Integer>();
  }

  public int size() {
    return stackNewest.size() + stackOldest.size();
  }

  public void add(int value) {
    /* Push onto stacknewest, which always has the newest elements on top */
    stackNewest.push(value);
  }

  /* Move elements from stackNewest into stackOldest. This is usually done so that
  we can do operations on stackOldest. */
  private void shiftStacks() {
    if (stackOldest.isEmpty()) {
      while (!stackNewest.isEmpty()) {
        stackOldest.push(stackNewest.pop());
      }
    }
  }

  public int peek() {
    shiftStacks(); // Ensure stackOldest has the current elements
    return stackOldest.peek();
  }

  public int remove() {
    shiftStacks(); // Ensure stackOldest has the current elements
    return stackOldest.pop(); // pop the oldest item.
  }
}