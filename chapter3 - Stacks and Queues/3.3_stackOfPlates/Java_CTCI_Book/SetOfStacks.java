import java.util.ArrayList;

public class SetOfStacks {
  ArrayList<Stack> stacks = new ArrayList<Stack>();
  public int capacity;

  public SetOfStacks(int capacity) {
    this.capacity = capacity;
  }
  
  public void push(int v) {
    Stack last = this.getLastStack();

    if (last != null && !last.isFull()) { // add to last stack
      last.push(v);
    } else { // must create new Stack
      Stack stack = new Stack(capacity);
      
      stack.push(v);
      stacks.add(stack);
    }
  }

  public int pop() throws EmptyStackException {
    Stack last = this.getLastStack();
    if (last == null) throw new EmptyStackException();
    
    int v = last.pop();
    
    if (last.size == 0) this.stacks.remove(this.stacks.size() - 1);
    
    return v;
  }

  public boolean isEmpty() {
    Stack last = this.getLastStack();
    return last == null || last.isEmpty();
  }

  public Stack getLastStack() {
    if (this.stacks.size() == 0) return null;
    return this.stacks.get(this.stacks.size() - 1);
  }

  public int popAt(int index) {
    return this.leftShift(index, true);
  }

  public int leftShift(int index, boolean removeTop) {
    Stack stack = this.stacks.get(index);
    int removed_item;

    if (removeTop) removed_item = stack.pop();
    else removed_item = stack.removeBottom();

    if (stack.isEmpty()) {
      this.stacks.remove(index);
    } else if (this.stacks.size() > index + 1) {
      int v = leftShift(index + 1, false);
      stack.push(v);
    }

    return removed_item;
  }
}