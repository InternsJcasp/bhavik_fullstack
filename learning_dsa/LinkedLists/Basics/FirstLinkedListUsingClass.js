// Linked List using Classical JS.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create New Node
const firstNode = new Node(10);
const secondNode = new Node(20);

// connect FirstNode to Second Node means a reference from FirstNode to Second Node.
firstNode.next = secondNode;

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  print() {
    let current = this.head;
    const values = [];

    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values.join(" → "));
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(300);
list.print();
console.log(list.length);
