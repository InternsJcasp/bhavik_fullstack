function createCircularQueue(capacity) {
  const data = new Array(capacity);
  let front = 0;
  let rear = 0;
  let count = 0;

  function isEmpty() {
    return count === 0;
  }

  function isFull() {
    return count === capacity;
  }

  function enqueue(value) {
    if (isFull()) {
      throw new Error("Queue is full");
    }

    data[rear] = value;
    rear = (rear + 1) % capacity;
    count += 1;
  }

  function dequeue() {
    if (isEmpty()) {
      return undefined;
    }

    const value = data[front];
    data[front] = null;
    front = (front + 1) % capacity;
    count -= 1;
    return value;
  }

  function peek() {
    if (isEmpty()) return undefined;
    return data[front];
  }

  return { enqueue, dequeue, peek, isEmpty, isFull };
}

// These Functions are private to
