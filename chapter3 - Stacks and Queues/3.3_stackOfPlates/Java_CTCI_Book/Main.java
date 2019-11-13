public class Main {
  public static void main(String args[]) {
    SetOfStacks setOfStacks = new SetOfStacks(3);

    setOfStacks.push(1);
    setOfStacks.push(2);
    setOfStacks.push(3);
    setOfStacks.push(4);
    setOfStacks.push(5);
    setOfStacks.push(6);
    setOfStacks.push(7);
    setOfStacks.push(8);
    setOfStacks.push(9);
    setOfStacks.push(10);
    setOfStacks.push(11);
    setOfStacks.push(12);
    setOfStacks.push(13);
    setOfStacks.push(14);

    System.out.println(setOfStacks.stacks);

    setOfStacks.popAt(2);

    System.out.println(setOfStacks.stacks);

    try {
      setOfStacks.pop();
      setOfStacks.pop();
      System.out.println(setOfStacks.stacks);
      setOfStacks.pop();
      setOfStacks.pop();
      System.out.println(setOfStacks.stacks);
      setOfStacks.pop();
      setOfStacks.pop();
      setOfStacks.pop();
      System.out.println(setOfStacks.stacks);
      setOfStacks.pop();
      setOfStacks.pop();
      setOfStacks.pop();
      System.out.println(setOfStacks.stacks);
      setOfStacks.pop();
      setOfStacks.pop();
      setOfStacks.pop();
    } catch(Exception e) {
      System.out.println(e);
    }

    System.out.println(setOfStacks.stacks);
  }
}