class Node {
  constructor(value) {
    this.value = value; // store the actual data
    this.next = null; // reference to the next node in line
  }
}

class Queue {
  constructor() {
    this.front = null; // points to the oldest node (who leaves first)
    this.rear = null; // points to the newest node (who just joined)
    this.size = 0; // how many elements are in the queue
  }

  enqueue(value) {
    const node = new Node(value); // create a new node for the new element

    if (this.rear === null) {
      // queue is empty: no rear means no front either
      this.front = node;
      this.rear = node;
    } else {
      // there is already a line: attach new node after current rear
      this.rear.next = node;
      this.rear = node; // now this new node becomes the rear
    }

    this.size += 1; // one more element in the queue
  }

  dequeue() {
    if (this.front === null) {
      return undefined; // nothing to remove
    }

    const node = this.front; // save current front to return its value
    this.front = this.front.next; // move front to the next node in line

    // If queue becomes empty, rear must also be reset
    if (this.front === null) {
      this.rear = null;
    }

    this.size -= 1; // one less element
    return node.value;
  }

    peek() {
    if (this.front === null) return undefined;
    return this.front.value; // look at who is at the front without removing
  }

  isEmpty() {
    return this.size === 0; // true if no elements
  }
}
