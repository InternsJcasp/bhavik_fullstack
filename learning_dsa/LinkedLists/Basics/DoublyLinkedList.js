function createDoublyNode(value) {
  return {
    value,
    prev: null,
    next: null,
  };
}

function createDoublyLinkedList() {
  let head = null;
  let tail = null;
  let length = 0;

  function append(value) {
    const newNode = createDoublyNode(value);

    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      newNode.prev = tail;
      tail.next = newNode;
      tail = newNode;
    }

    length += 1;
  }

  function prepend(value) {
    const newNode = createDoublyNode(value);

    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      newNode.next = head;
      head.prev = newNode;
      head = newNode;
    }

    length += 1;
  }

  function removeFirst() {
    if (head === null) {
      return null;
    }

    const removedValue = head.value;

    if (head === tail) {
      head = null;
      tail = null;
    } else {
      head = head.next;
      head.prev = null;
    }

    length -= 1;
    return removedValue;
  }

  function removeLast() {
    if (tail === null) {
      return null;
    }

    const removedValue = tail.value;

    if (head === tail) {
      head = null;
      tail = null;
    } else {
      tail = tail.prev;
      tail.next = null;
    }

    length -= 1;
    return removedValue;
  }

  function remove(value) {
    let current = head;

    while (current !== null) {
      if (current.value === value) {
        if (current === head) {
          removeFirst();
        } else if (current === tail) {
          removeLast();
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
          length -= 1;
        }

        return true;
      }

      current = current.next;
    }

    return false;
  }

  function forwardTraversal() {
    const values = [];
    let current = head;

    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }

  function backwardTraversal() {
    const values = [];
    let current = tail;

    while (current !== null) {
      values.push(current.value);
      current = current.prev;
    }

    return values;
  }

  function size() {
    return length;
  }

  function isEmpty() {
    return head === null;
  }

  return {
    append,
    prepend,
    removeFirst,
    removeLast,
    remove,
    forwardTraversal,
    backwardTraversal,
    size,
    isEmpty,
  };
}

const history = createDoublyLinkedList();

history.append("google.com");
history.append("github.com");
history.append("stackoverflow.com");

console.log(history.forwardTraversal());
// ["google.com", "github.com", "stackoverflow.com"]

console.log(history.backwardTraversal());
// ["stackoverflow.com", "github.com", "google.com"]

history.prepend("youtube.com");

console.log(history.forwardTraversal());
// ["youtube.com", "google.com", "github.com", "stackoverflow.com"]

history.remove("github.com");

console.log(history.forwardTraversal());
// ["youtube.com", "google.com", "stackoverflow.com"]

console.log(history.size());
// 3
