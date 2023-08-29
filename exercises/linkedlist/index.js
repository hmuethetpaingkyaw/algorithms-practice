// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  size() {
    let count = 0;
    let head = this.head;
    while (head) {
      head = head.next;
      count++;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let head = this.head;
    while (head) {
      if (!head.next) {
        return head;
      }
      head = head.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast(); 
    const node = new Node(data);
    if (last) {
     
      last.next = node;
      return;
    }

    this.head = node;

  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
        
        if(counter === index) {
            return node;
        }

        counter ++;
        node = node.next;
    }

    return null;
  }

  removeAt(index) {
    if(!this.head) {
      return null;
    }

    if(index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if(!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if(!this.head) {
      this.head = new Node(data);
    }

    if(index === 0) {
      this.head = new Node(data, this.head);
    }

    const previous = this.getAt(index - 1) || this.getLast();
    previous.next = new Node(data, previous.next);
  }
}

const list = new LinkedList();
list.head = new Node(10);

module.exports = { Node, LinkedList };
