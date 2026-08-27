class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.data = new Array(capacity); // fixed-size buffer
    this.front = 0; // index of the oldest element
    this.rear = 0; // index where the next element will be inserted
    this.count = 0; // how many elements are currently stored
  }

  isEmpty() {
    return this.count === 0;
  }

  isFull() {
    return this.count === this.capacity;
  }

  enqueue(value) {
    if (this.isFull()) {
      throw new Error("Queue is full");
    }

    this.data[this.rear] = value;
    this.rear = (this.rear + 1) % this.capacity;
    this.count += 1;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const value = this.data[this.front];
    this.data[this.front] = null; // optional: clear reference
    this.front = (this.front + 1) % this.capacity;
    this.count -= 1;
    return value;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.data[this.front];
  }
}
