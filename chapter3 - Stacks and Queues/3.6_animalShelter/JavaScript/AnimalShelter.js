const LinkedList = require("./LinkedList");
const Dog = require("./Dog");
const Cat = require("./Cat");

class AnimalShelter {
  constructor() {
    this.top = null;
    this.bottom = null;
  };

  enqueue(val) {
    if (!this.top) {
      this.top = new LinkedList(val);
    } else if (!this.bottom) {
      this.bottom = new LinkedList(val);
      this.top.next = this.bottom;
    } else {
      const node = new LinkedList(val);
      this.bottom.next = node;
      this.bottom = node;
    }
  };

  dequeueAny() {
    const node = this.top;
    this.top = this.top.next;

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    return node.val.type;
  };

  dequeueDog() {
    let node = this.top;
    let prev_node = null;

    while (node) {
      if (node.val instanceof Dog) {
        if (node === this.top) {
          return this.dequeueAny();
        }

        prev_node.next = node.next;

        return node.val.type;
      }

      prev_node = node;
      node = node.next;
    }

    return null;
  };

  dequeueCat() {
    let node = this.top;
    let prev_node = null;

    while (node) {
      if (node.val instanceof Cat) {
        if (node === this.top) {
          return this.dequeueAny();
        }

        prev_node.next = node.next;

        return node.val.type;
      }

      prev_node = node;
      node = node.next;
    }

    return null;
  };
};

module.exports = AnimalShelter;