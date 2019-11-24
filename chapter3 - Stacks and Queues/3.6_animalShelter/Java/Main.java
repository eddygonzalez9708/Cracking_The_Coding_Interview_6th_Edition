public class Main {
  public static void main(String args[]) {
    Dog a1 = new Dog("machi");
    Dog a2 = new Dog("daisy");
    Dog a3 = new Dog("miso");

    Cat c1 = new Cat("peanuts");
    Cat c2 = new Cat("dada");
    Cat c3 = new Cat("xiaoxiao");

    AnimalQueue a = new AnimalQueue();

    a.enqueue(a1);
    a.enqueue(a2);
    a.enqueue(c1);
    a.enqueue(a3);
    a.enqueue(c2);
    a.enqueue(c3);

    System.out.println(a.dequeueAny() +  " machi");
    System.out.println(a.dequeueCats() + " peanuts");
    System.out.println(a.dequeueAny() + " daisy");
    System.out.println(a.dequeueAny() + " miso");
  }
}