import java.util.LinkedList;

public class AnimalQueue {
  LinkedList<Dog> dogs = new LinkedList<Dog>();
  LinkedList<Cat> cats = new LinkedList<Cat>();
  private int order = 0; // acts as timestamp

  public void enqueue(Animal a) {
    /* Order is used as a sort of timestamp, so that we can compare the insertion
    order of a dog to a cat. */
    a.setOrder(order);
    order++;

    if (a instanceof Dog) dogs.addLast((Dog) a);
    else if (a instanceof Cat) cats.addLast((Cat) a);
  }

  public String dequeueAny() {
    /* Look at tops of dog and cat queues, and pop the queue with the oldest value. */
    if (dogs.size() == 0) {
      return dequeueCats();
    } else if (cats.size() == 0) {
      return dequeueDogs();
    }

    Dog dog = dogs.peek();
    Cat cat = cats.peek();

    if (dog.isOlderThan(cat)) {
      return dequeueDogs();
    } else {
      return dequeueCats();
    }
  }

  public String dequeueDogs() {
    return dogs.poll().name;
  }

  public String dequeueCats() {
    return cats.poll().name;
  }
}