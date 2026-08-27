function createQueue() {
  let front = null;
  let rear = null;
  let size = 0;

  function createNode(value) {
    return { value, next: null };
  }

  function enqueue(value) {
    const node = createNode(value);

    if (rear === null) {
      front = node;
      rear = node;
    } else {
      rear.next = node;
      rear = node;
    }

    size += 1;
  }

  function dequeue() {
    if (front === null) {
      return undefined;
    }

    const node = front;
    front = front.next;

    if (front === null) {
      rear = null;
    }

    size -= 1;
    return node.value;
  }

  function peek() {
    if (front === null) return undefined;
    return front.value;
  }

  function isEmpty() {
    return size === 0;
  }

  return { enqueue, dequeue, peek, isEmpty };
}
