import java.util.Stack;

class Main {
  public static void main(String args[]) {
    SortStack sortStack = new SortStack();
    Stack<Integer> stack = new Stack<Integer>();

    stack.push(99);
    stack.push(4);
    stack.push(1);
    stack.push(6);
    stack.push(8);
    stack.push(10);
    stack.push(22);
    stack.push(3);
    stack.push(72);

    sortStack.sort(stack);

    while (!stack.isEmpty()) {
      System.out.println(stack.pop());
    }
  }
}