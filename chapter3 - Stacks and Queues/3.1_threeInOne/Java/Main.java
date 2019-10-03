public class Main {
  public static void main(String[] args) throws Exception {
    FixedMultiStack threeInOne = new FixedMultiStack(3);

    // Push three numbers to stack 0
    threeInOne.push(0, 1);
    threeInOne.push(0, 2);
    threeInOne.push(0, 3);

    // Push three numbers to stack 1
    threeInOne.push(1, 1);
    threeInOne.push(1, 2);
    threeInOne.push(1, 3);

    // Push three numbers to stack 2
    threeInOne.push(2, 1);
    threeInOne.push(2, 2);
    threeInOne.push(2, 3); 

    // Peek at what is at the top of all three stacks
    System.out.println("Peek at what is at the top of all three stacks");
    System.out.println(threeInOne.peek(0));
    System.out.println(threeInOne.peek(1));
    System.out.println(threeInOne.peek(2));

    // Pop the top number from all three stacks
    System.out.println("Pop the last number in all three stacks");
    System.out.println(threeInOne.pop(0));
    System.out.println(threeInOne.pop(1));
    System.out.println(threeInOne.pop(2));

    // Peek at what is at the top of all three stacks
    System.out.println("Peek at what is at the top of all three stacks");
    System.out.println(threeInOne.peek(0));
    System.out.println(threeInOne.peek(1));
    System.out.println(threeInOne.peek(2));

    // Pop the top number from all three stacks
    System.out.println("Pop the last number in all three stacks");
    System.out.println(threeInOne.pop(0));
    System.out.println(threeInOne.pop(1));
    System.out.println(threeInOne.pop(2));

    // Peek at what is at the top of all three stacks
    System.out.println("Peek at what is at the top of all three stacks");
    System.out.println(threeInOne.peek(0));
    System.out.println(threeInOne.peek(1));
    System.out.println(threeInOne.peek(2));

    // Pop the top number from all three stacks
    System.out.println("Pop the last number in all three stacks");
    System.out.println(threeInOne.pop(0));
    System.out.println(threeInOne.pop(1));
    System.out.println(threeInOne.pop(2));
  }
}