public class Main {
  public static void main(String args[]) {
    MyQueue myqueue = new MyQueue();

    myqueue.add(1);
    myqueue.add(2);
    myqueue.add(3);
    myqueue.add(4);
    myqueue.add(5);

    myqueue.remove();

    System.out.println(myqueue.peek() + " 2");

    myqueue.add(6);
    myqueue.add(7);
    myqueue.add(8);

    System.out.println(myqueue.peek() + " 2");

    myqueue.remove();

    System.out.println(myqueue.peek() + " 3");
  }
}