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

    StackWithMin2 stack2 = new StackWithMin2();

    stack2.push(7);
    stack2.push(7);
    stack2.push(2);
    stack2.push(1);
    stack2.push(0);

    System.out.println(stack2.min());

    stack2.pop();
    stack2.pop();

    System.out.println(stack2.min());

    stack2.pop();
    stack2.pop();

    System.out.println(stack2.min());
  }
}