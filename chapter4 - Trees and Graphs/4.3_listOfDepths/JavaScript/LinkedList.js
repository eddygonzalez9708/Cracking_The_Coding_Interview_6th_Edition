const ListNode = require("./ListNode");

class LinkedList {
  constructor() {
    this.top = null;
    this.bottom = null;
  }

  add(val) {
    const node = new ListNode(val);

    if (this.bottom) {
      this.bottom.next = node;
      this.bottom = node;
    } else {
      this.top = node;
      this.bottom = node; 
    }
  };

  remove() {
    const node = this.top;

    if (this.top === this.bottom) {
      this.top = null;
      this.bottom = null
    } else if (this.top) {
      this.top = this.top.next;
    } else {
      return null;
    }

    return node;
  };
};

module.exports = LinkedList;