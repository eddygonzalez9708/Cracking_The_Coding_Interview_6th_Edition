class Main {
  public static void main(String args[]) {
    StackWithMin stack = new StackWithMin();

    stack.push(5);
    stack.push(4);
    stack.push(2);
    stack.push(7);

    System.out.println(stack.min());

    stack.pop();
    stack.pop();

    System.out.println(stack.min());

    stack.pop();
    stack.pop();

    System.out.println(stack.min());
  }
}